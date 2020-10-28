import { AccountCircle, Assignment } from '@material-ui/icons';
import { AppBar, Box, IconButton, Switch, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link, Route, Switch as RouterSwitch } from 'react-router-dom';

import Container from '@material-ui/core/Container/Container';
import Enrollment from '../Enrollment/Enrollment';
import Home from '../Home/Home';
import React from 'react';
import footer from '../../assets/fake-footer.png'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  mainContainer: {
    paddingTop: '48px',
    paddingBottom: '48px',
  },
  footer: {
    backgroundColor: '#fff',
  },
}))

const App:React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <header>
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar>
              <Link to="/">
                <IconButton edge="start" color="secondary" aria-label="open drawer" >
                  <Assignment fontSize="large" />
                </IconButton>
              </Link>
              <Typography variant="h6">
                Patients
              </Typography>
              <div className={classes.grow} />
              <Switch name="darkMode" />
              <IconButton edge="end" aria-label="User" aria-haspopup="true" color="inherit" >
                <AccountCircle />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <Container maxWidth="lg" className={classes.mainContainer}>
        <RouterSwitch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/enrollment">
            <Enrollment />
          </Route>
        </RouterSwitch>
      </Container>
      <footer className={classes.footer}>
        <Box display="flex" justifyContent="center" >
          <img src={footer} alt="Fake footer" />
        </Box>
      </footer>
    </>
  );
}

export default App;
