import { Box, Button, Paper, Typography } from '@material-ui/core';

import React from 'react';
import { useHistory } from 'react-router-dom'

const Home:React.FC = () => {
  const { push } = useHistory();

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Patient Enrollment Form
      </Typography>
      <Typography>
        Work with our Parsley Care Team online to understand your health concern and start a personalized health plan.
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac tortor. Sed blandit libero volutpat sed. Convallis a cras semper auctor neque vitae tempus. Purus non enim praesent elementum facilisis. In massa tempor nec feugiat nisl pretium fusce id. Ultricies tristique nulla aliquet enim tortor at auctor urna. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. In hac habitasse platea dictumst quisque sagittis. Id leo in vitae turpis massa sed elementum tempus egestas. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Gravida quis blandit turpis cursus in hac habitasse. Neque convallis a cras semper auctor.
      </Typography>
      <Paper>
        <Typography variant="h6" component="h1" gutterBottom>
          Enrolled patient
        </Typography>
        <Typography>There is no enrolled patient.</Typography>
        <Typography>Enroll yourself, a family mmeber now to start the process.</Typography>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
        <Box display="flex" justifyContent="center" >
          <Button variant="contained" color="primary" onClick={() => push('/enrollment')} >
            Enroll Now
          </Button>
        </Box>
        <Box display="flex" justifyContent="flex-end" >
          <Button variant="contained" color="primary" onClick={() => push('/enrollment/demographic')} >
            Edit
          </Button>
          <Button variant="contained" color="primary" onClick={() => push('/enrollment/submission')} >
            Sumary
          </Button>
        </Box>
      </Paper>
    </>
  )
}

export default Home;