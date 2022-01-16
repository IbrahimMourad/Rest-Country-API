import React from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import { useStyles } from './styles';

export const CountryCard = ({
  country: { name, population, region, capital, flags },
}) => {
  const classes = useStyles();
  const numberWithCommas = (x) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <Card className={classes.card}>
      <img src={flags.svg} className={classes.flag} alt={`${name} flag`} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {name.common || name}
        </Typography>
        <Typography sx={{ mb: 0 }} variant="body1">
          Population:
          <span className={classes.span}>{numberWithCommas(population)}</span>
        </Typography>
        <Typography sx={{ mb: 0 }} variant="body1">
          Country: <span className={classes.span}>{region}</span>
        </Typography>
        <Typography sx={{ mb: 0 }} variant="body1">
          Capital: <span className={classes.span}>{capital}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};
