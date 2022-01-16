/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Layout } from './components/Layout/Layout';
import { Navigation } from './components/Layout/Header';
import { Countries } from './components/Countries/Countries';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Details } from './components/Countries/Details/Details';
import { Filter } from './components/Filter/Filter';
import { Store } from './utils/Store';

function App() {
  const { state } = useContext(Store);
  const { darkMode } = state;
  const getDesignTokens = (mode) => ({
    palette: {
      mode: darkMode ? 'dark' : 'light',

      ...(mode === 'dark' && {
        background: {
          default: '#20262b',
          paper: '#20262b',
          appBar: '#20262b',
        },
      }),
      ...(mode === 'light' && {
        background: {
          default: '#fafafa',
          paper: '#fafafa',
        },
        text: {
          primary: '#111517',
        },
      }),
    },
    typography: {
      fontFamily: 'Nunito Sans',
      fontWeightLight: 300,
      fontWeightMedium: 600,
      fontWeightBold: 800,
      h5: {
        fontWeight: 800,
      },
      h6: {
        fontWeight: 600,
      },
      body1: {
        fontWeight: 600,
      },
    },
  });
  const theme = useMemo(
    () => createTheme(getDesignTokens(darkMode ? 'dark' : 'light')),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Layout>
        <Filter />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="countries/:name" element={<Details />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
