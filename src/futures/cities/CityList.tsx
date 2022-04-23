import React, { useEffect } from 'react';
import CityItem from './CityItem';
import CityMain from './CityMain';
import { Box, Grid } from '@mui/material';
import { useAppSelector } from '../../app/reducer';

const CityList = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
    });
  }, []);
  const { cities } = useAppSelector((state) => state.cityReducer);
  console.log(cities);
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
      <Grid item xs={3}>
        <CityMain />
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, gap: 2 }}>
          {cities.map((city) => (
            <CityItem key={city} city={city} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default CityList;
