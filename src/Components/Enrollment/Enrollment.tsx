import { Box, Button, Step, StepButton, Stepper, Typography } from "@material-ui/core";
import { Redirect, Route, Switch as RouterSwitch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import Conditions from "../Conditions/Conditions";
import Demographic from '../Demographic/Demographic';
import Questionaire from "../Questionaire/Questionaire";
import React from "react";

const StepperRoutes = new Map([
  ['demographic', 0],
  ['conditions', 1],
  ['questionaire', 2],
  ['summary', 3],
  ['submission', 4],
]);

const Enrollment: React.FC = () => {
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const step = pathname.split('/').pop() || 'demographic'

  const handleClick = (route: string): void => {
    push(`${path}/${route}`)
  }

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Patient Enrollment Form
      </Typography>
      <Typography>Please fill the patient enrollment form.</Typography>
      <Stepper nonLinear activeStep={StepperRoutes.get(step)}>
        <Step>
          <StepButton onClick={() => handleClick('demographic')}>Demographic Data</StepButton>
        </Step>
        <Step>
          <StepButton onClick={() => handleClick('conditions')}>Conditions</StepButton>
        </Step>
        <Step>
          <StepButton onClick={() => handleClick('questionaire')}>Medical Questionnaire</StepButton>
        </Step>
        <Step>
          <StepButton onClick={() => handleClick('summary')}>Summary</StepButton>
        </Step>
        <Step>
          <StepButton onClick={() => handleClick('submission')}>Submission</StepButton>
        </Step>
      </Stepper>
      <RouterSwitch>
      <Route exact path={path}>
          <Redirect to={`${path}/demographic`} />
        </Route>
        <Route path={`${path}/demographic`}>
          <Demographic />
        </Route>
        <Route path={`${path}/conditions`}>
          <Conditions />
        </Route>
        <Route path={`${path}/questionaire`}>
          <Questionaire />
        </Route>
        <Route path={`${path}/summary`}>
          <h3>Sum</h3>
        </Route>
        <Route path={`${path}/submission`}>
          <h3>Subm</h3>
        </Route>
      </RouterSwitch>
      <Box display="flex" justifyContent="flex-end" marginTop={4} >
        { step !== 'demographic' ?
          <Button variant="contained" color="primary">
            Previous
          </Button>
        : null }
        { step !== 'submission' ?
          <Button variant="contained" color="primary">
            Next
          </Button>
        : null }
      </Box>
    </>
  );
}

export default Enrollment;
