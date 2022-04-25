import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../../app/reducer';
import { citySlice } from './CitySlice';

interface CityNotFoundProps {
  city: string;
}

const CityNotFound = ({ city }: CityNotFoundProps) => {
  const dispatch = useAppDispatch();
  const { removeCity } = citySlice.actions;
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        maxHeight: 200,
        minWidth: 200,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {city}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            City not found
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'end', p: 1 }}>
        <CloseIcon fontSize="small" onClick={() => dispatch(removeCity(city))} />
      </Box>
    </Card>
  );
};

export default CityNotFound;
