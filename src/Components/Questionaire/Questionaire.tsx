import { Box, Button, CircularProgress, Collapse, Grid, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, MobileStepper, Paper, Switch, TextField, Typography } from '@material-ui/core';
import { ContactSupport, KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { Question, QuestionControlsProps, QuestionaireProps } from './State/types';
import React, { useEffect } from 'react';

import { ConvinedStates } from '../../Types/types';
import SwipeableViews from 'react-swipeable-views';
import { addQuestion } from './State/actions'
import { autoPlay } from 'react-swipeable-views-utils';
import { connect } from 'react-redux'
import { loadQuestions } from './Async/thunk'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const QuestionControls: React.FC<QuestionControlsProps> = ({question, addQuestion}) => {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleOnChange = (e: { target: { name?: any; value: any; }; }) => {
    const { name, value } = e.target;
    addQuestion({...question, [name]: value});
  }

  return (
    <>
      <ListItem>
        <ListItemIcon>
          <ContactSupport />
        </ListItemIcon>
        <ListItemText id={question.question} primary={question.question} />
        <ListItemSecondaryAction>
          <Switch edge="end" onChange={handleToggle} checked={question.response}
            inputProps={{ 'aria-labelledby': question.question }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Typography variant="h6" component="h1" gutterBottom>
          {question.inquiry}
        </Typography>
        <TextField multiline label="Answer" variant="outlined" name="answer" margin="normal" value={question.answer} onChange={handleOnChange} />
      </Collapse>
    </>
  )
}

const Questionaire: React.FC<QuestionaireProps> = ({ isLoading, loadQuestions, questions, addQuestion }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    loadQuestions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const loadingMessage = (
    <Box display="flex" justifyContent="center" >
      <CircularProgress color="secondary" />
      <div>Loading questions...</div>
    </Box>
  );

  const content = (
    <Paper elevation={2}>
      <AutoPlaySwipeableViews autoPlay={false} interval={999999} axis={'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
        {
          questions.map((question: Question) => (
            <List>
              <QuestionControls question={question} addQuestion={addQuestion} />
            </List>
          ))
        }
      </AutoPlaySwipeableViews>
      <MobileStepper variant="progress" steps={questions.length} position="static" activeStep={activeStep} color="secondary"
        nextButton={
          <Button onClick={handleNext} disabled={activeStep === 5}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Paper>
  );

  return isLoading ? loadingMessage : content;
}

const mapStateToProps = (states: ConvinedStates) => ({
  isLoading: states.questionsState.isLoading,
  questions: states.questionsState.questions,
})

const mapDispatchToProps = (dispatch: Function) => ({
  loadQuestions: () => dispatch(loadQuestions()),
  addQuestion: (question: Question) => dispatch(addQuestion(question))
})

export default connect(mapStateToProps, mapDispatchToProps)(Questionaire);