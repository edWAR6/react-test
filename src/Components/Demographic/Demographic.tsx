import { DemographicProps, Demographic as DemographicType } from './State/types'
import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import { ConvinedStates } from '../../Types/types';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import { connect } from 'react-redux'
import { saveDemographic } from './State/actions'

const Demographic: React.FC<DemographicProps> = ({ demographic = {}, onSave }) => {
  const handleOnChange = (e: { target: { name?: any; value: any; }; }) => {
    const { name, value } = e.target;
    onSave({demographic: {...demographic, [name]: value}});
  }

  return (
    <Paper elevation={2}>
      <form >
        <Grid container spacing={2} >
          <Grid container item xs={6} direction="column" >
            <TextField label="First Name" variant="outlined" name="firstName" margin="normal" value={demographic.firstName} onChange={handleOnChange} />
            <TextField label="Last Name" variant="outlined" name="lastName" margin="normal" value={demographic.lastName} onChange={handleOnChange} />
            <FormControl variant="outlined">
              <InputLabel id="gender">Gender</InputLabel>
              <Select labelId="gender" label="Gender" name="gender" value={demographic.gender} onChange={handleOnChange} >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker disableToolbar variant="inline" autoOk={true} inputVariant="outlined" format="MM/dd/yyyy" margin="normal" label="Birthday"
                name="birthday"
                value={demographic.birthday}
                onChange={(date) => handleOnChange({target: {name: 'birthday', value: date}})}
                KeyboardButtonProps={{
                  'aria-label': 'Birthday',
                }}
              />
            </MuiPickersUtilsProvider>
            <TextField type="email" label="Email" variant="outlined" name="email" margin="normal" value={demographic.email} onChange={handleOnChange} />
            <TextField type="phone" label="Phone Number" variant="outlined" name="phone" margin="normal" value={demographic.phone} onChange={handleOnChange} />
          </Grid>
          <Grid container item xs={6} direction="column" >
            <TextField multiline label="Street Address" variant="outlined" name="address" margin="normal" value={demographic.address} onChange={handleOnChange} />
            <TextField label="City" variant="outlined" name="city" margin="normal" value={demographic.city} onChange={handleOnChange} />
            <TextField label="State" variant="outlined" name="state" margin="normal" value={demographic.state} onChange={handleOnChange} />
            <TextField label="Zip" inputMode="numeric" variant="outlined" name="zip" margin="normal" value={demographic.zip} onChange={handleOnChange} />
            <FormControl variant="outlined">
              <InputLabel id="status">Marital Status</InputLabel>
              <Select labelId="statusr" label="Marital Status" name="status" value={demographic.status} onChange={handleOnChange} >
                <MenuItem value="maried">Maried</MenuItem>
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="divorced">Divorced</MenuItem>
                <MenuItem value="lifePartner">Life Partner</MenuItem>
                <MenuItem value="separated">Separated</MenuItem>
                <MenuItem value="widowed">Widowed</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

const mapStateToProps = (states: ConvinedStates) => ({
  demographic: states.demographicState.demographic,
})

const mapDispatchToProps = (dispatch: Function) => ({
  onSave: (demographic: DemographicType) => dispatch(saveDemographic(demographic)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Demographic);
