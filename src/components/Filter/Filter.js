import React, { useContext } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Container, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from './FilterStyles';
import { Store } from '../../utils/Store';
import axios from 'axios';
export const Filter = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const { filter, searchWord } = state;
  const handleChange = (e) => {
    dispatch({
      type: 'SET_FILTER',
      payload: { filter: e.target.value, isLoading: true },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://restcountries.com/v2/name/${searchWord}`
    );
    dispatch({
      type: 'FETCH_BY_NAME',
      payload: data,
    });
    dispatch({ type: 'SET_LOADING', payload: false });
  };
  const handleSearch = (e) => {
    dispatch({
      type: 'SEARCH_BY_WORD',
      payload: { searchWord: e.target.value },
    });
    dispatch({ type: 'SET_LOADING', payload: true });
  };
  return (
    <Container sx={{ mt: '16px' }}>
      <div className={classes.filterWrapper}>
        <div className={classes.filterInput}>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <TextField
              // sx={{ width: '100%' }}
              className={classes.root}
              id="outlined-basic"
              placeholder="Search for a country "
              variant="outlined"
              value={searchWord}
              onChange={handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Button onClick={handleSubmit}>
                      <SearchIcon />
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
            <label
              style={{
                fontWeight: 300,
                fontSize: 14,
              }}
            >
              PS: press <strong>Enter</strong> or <strong>Click</strong> the
              search icon
            </label>
          </form>
        </div>
        <FormControl className={classes.FormControl}>
          <InputLabel id="filter-label" className={classes.InputLabel}>
            Region
          </InputLabel>
          <Select
            labelId="filter-label"
            id="filter"
            value={filter}
            label="Region"
            onChange={handleChange}
            className={classes.root}
          >
            <MenuItem value={'All'}>All</MenuItem>
            <MenuItem value={'Africa'}>Africa</MenuItem>
            <MenuItem value={'America'}>America</MenuItem>
            <MenuItem value={'Asia'}>Asia</MenuItem>
            <MenuItem value={'Europe'}>Europe</MenuItem>
            <MenuItem value={'Oceania'}>Oceania</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Container>
  );
};
