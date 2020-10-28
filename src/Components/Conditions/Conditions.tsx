import { Box, Checkbox, Collapse, InputAdornment, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@material-ui/core';
import { Condition, ConditionItemProps, ConditionsProps, TypeSectionProps } from './State/types';
import { ExpandLess, ExpandMore, Search } from '@material-ui/icons';
import React, { useState } from 'react';
import { addCondition, removeCondition } from './State/actions';

import { ConvinedStates } from '../../Types/types';
import conditionsFile from '../../assets/conditions.json'
import { connect } from 'react-redux'

const TypeSection: React.FC<TypeSectionProps> = ({type, labelId, conditions, addCondition, removeCondition}) => {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return(
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={type} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {conditions.map((condition, index) => (
          <ConditionItem key={`${labelId}${index}`} labelId={`${labelId}${index}`} condition={condition} addCondition={addCondition} removeCondition={removeCondition} />
        ))}
      </Collapse>
    </>
  );
}

const ConditionItem: React.FC<ConditionItemProps> = ({labelId, condition, addCondition, removeCondition}) => {
  const handleChecked = () => {
    if (condition.checked) {
      removeCondition(condition)
    } else {
      addCondition({...condition, checked: true})
    }
  }

  return (
    <List component="div" disablePadding>
      <ListItem button onClick={handleChecked}>
        <ListItemIcon>
          <Checkbox
            checked={condition.checked}
            edge="start"
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={condition.condition} />
      </ListItem>
    </List>
  )
}

const Conditions: React.FC<ConditionsProps> = ({ conditions, addCondition, removeCondition }) => {
  const [ query, setQuery ] = useState('');

  return (
    <>
      <Typography>
        Select your known mecical conditions.
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
      </Typography>
      <Paper elevation={2} >
        <Box display="flex" justifyContent="center" >
          <TextField variant="outlined" name="search" margin="normal" InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }} value={query} onChange={(e) => setQuery(e.target.value)} />
        </Box>
        <List component="nav" aria-labelledby="nested-list-subheader">
          {Object
            .entries(conditionsFile
            .filter((condition: Condition) => query === '' ? condition : (condition.type.toLowerCase().includes(query.toLowerCase()) || condition.condition.toLowerCase().includes(query.toLowerCase())) ? condition : null)
            .map((conditionFile: Condition) => ({ ...conditionFile, checked: false, ...conditions.find((condition: Condition) => conditionFile.condition === condition.condition) }))
            .reduce((types: any, condition: Condition) => ({...types, [condition.type]: [...(types[condition.type] || []), condition]}), {}))
            .map(([type, conditions], index) => (<TypeSection key={type} type={type} labelId={`${type}${index}`} conditions={conditions as Array<Condition>} addCondition={addCondition} removeCondition={removeCondition} />))
          }
        </List>
      </Paper>
    </>
  )
}

const mapStateToProps = (states: ConvinedStates) => ({
  conditions: states.conditionsState.conditions,
})

const mapDispatchToProps = (dispatch: Function) => ({
  addCondition: (condition: Condition) => dispatch(addCondition(condition)),
  removeCondition: (condition: Condition) => dispatch(removeCondition(condition)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Conditions);