/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useMemo } from 'react';
import axios from 'axios';
import { CircularProgress, Container, Grid } from '@mui/material';
import { CountryCard } from './CountryCard/CountryCard';
import { Link } from 'react-router-dom';
import { Store } from '../../utils/Store';

export const Countries = React.memo(() => {
  const { state, dispatch } = useContext(Store);
  const { filter, countries, isLoading, searchWord } = useMemo(
    () => state,
    [state]
  );

  useEffect(() => {
    const fetchCountries = async () => {
      const { data } = await axios.get('https://restcountries.com/v2/all');
      dispatch({ type: 'FETCH_ALL', payload: data });
      dispatch({ type: 'SET_LOADING', payload: false });
    };
    const fetchByRegion = async () => {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/region/${filter}`
      );
      dispatch({ type: 'FETCH_ALL', payload: data });
      dispatch({ type: 'SET_LOADING', payload: false });
    };
    if (filter !== 'All') {
      fetchByRegion();
    }
    if (filter === 'All' && !searchWord) {
      fetchCountries();
    }
  }, [filter]);

  return (
    <Container sx={{ mt: 2 }}>
      {isLoading ? (
        <CircularProgress sx={{ mt: 3 }} />
      ) : (
        <Grid container spacing={2}>
          {countries?.map((country) => (
            <Grid
              item
              xs={12}
              md={4}
              sm={6}
              lg={3}
              key={country.name.common || country.name}
            >
              <Link
                style={{ textDecoration: 'none' }}
                to={`/countries/${country.name.common || country.name}`}
              >
                <CountryCard country={country} />
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
});
