/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useStyles } from '../CountryCard/styles';
import { Link, useParams } from 'react-router-dom';
import { Store } from '../../../utils/Store';

export const Details = () => {
  const classes = useStyles();
  const { name } = useParams();
  const { state } = useContext(Store);
  const { countries } = state;
  const country = countries.find((country) => country.name === name);
  console.log(country.name);
  console.log(country.flags);
  const {
    flags,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders = [],
  } = country;

  const currencyObj = currencies ? currencies[0] : '';

  const borderCountries = borders.map((border) => {
    const nation = countries.find((country) => country.alpha3Code === border);
    return nation.name;
  });

  return (
    <Container>
      <Link to="/" className={classes.link}>
        <Button variant="contained" className={classes.btn}>
          <ArrowRightAltIcon className={classes.arrowRotate} />
          Back
        </Button>
      </Link>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={flags.svg} className={classes.flag} alt={`${name} flag`} />
        </Grid>
        <Grid container item xs={12} md={6}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h2">
              {name}
            </Typography>

            <Typography sx={{ mt: 2 }}>
              Native Name: <span className={classes.span}>{nativeName}</span>
            </Typography>
            <Typography sx={{ mb: '.5rem' }} variant="body1">
              Population:{' '}
              <span className={classes.span}>
                {population.toLocaleString('en-US')}
              </span>
            </Typography>
            <Typography sx={{ mb: '.5rem' }} variant="body1">
              Region: <span className={classes.span}>{region}</span>
            </Typography>
            <Typography sx={{ mb: '.5rem' }} variant="body1">
              Sub Region: <span className={classes.span}>{subregion}</span>
            </Typography>
            <Typography sx={{ mb: '.5rem' }} variant="body1">
              Capital: <span className={classes.span}>{capital}</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ mb: '.5rem' }} variant="body1">
              Top Level Domain:{' '}
              <span className={classes.span}>{topLevelDomain}</span>
            </Typography>
            <Typography sx={{ mb: '.5rem' }} variant="body1">
              Currency:
              <span className={classes.span}> {currencyObj.name}</span>
            </Typography>
            <Typography sx={{ mb: '.5rem' }} variant="body1">
              Languages:
              {languages.map((lang, index) => (
                <span key={index + Date.now()} className={classes.span}>
                  {` ${lang.name}${index === languages.length - 1 ? '' : ','}`}
                </span>
              ))}
            </Typography>
          </Grid>

          <Typography sx={{ mb: '.5rem' }} variant="body1">
            Border Countries:{' '}
            <span>
              {borderCountries.length > 0 ? (
                borderCountries?.map((border, index) => (
                  <span key={index + Date.now()} className={classes.border}>
                    <Link key={border} to={`/countries/${border}`}>
                      {border}
                    </Link>
                  </span>
                ))
              ) : (
                <span className={classes.span}>
                  {' '}
                  This nation has no border countries
                </span>
              )}
            </span>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
