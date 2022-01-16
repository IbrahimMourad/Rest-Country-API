import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useStyles } from './HeaderStyles';
import { Store } from '../../utils/Store';
import Cookies from 'js-cookie';

export const Navigation = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classes.icon}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classes.icon}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.root}>
        <Container>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
              Where in the world?
            </Typography>
            <button className={classes.btn} onClick={darkModeChangeHandler}>
              {darkMode ? darkIcon : lightIcon} Dark Mode
            </button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
