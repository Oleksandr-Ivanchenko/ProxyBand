import React from 'react';
import './SearchBar.scss';
import { Paper, Typography, TextField } from '@mui/material';

export const SearchBar = ({
  setFilters,
  fields,
  filters,
}) => {
  return (
    <Paper elevation={3} className="Search">
      <Typography variant="h5">
        Search:
      </Typography>
      <div className="Search__inputs">
        {fields.map(field => (
          <TextField 
            id="standard-basic" 
            label={field.toUpperCase()} 
            variant="standard" 
            value={filters.parametr === field ? filters.value : ''}
            onChange={(e) => setFilters({
              parametr: field,
              value: e.target.value,
            })}
          />
        ))}
      </div>
    </Paper>
  )
};