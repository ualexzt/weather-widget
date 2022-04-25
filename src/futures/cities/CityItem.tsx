import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { weatherApi } from '../../app/weatherApi';
import CityNotFound from './CityNotFound';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../../app/reducer';
import { citySlice } from './CitySlice';

interface CityItemProps {
  city: string;
}

const CityItem = ({ city }: CityItemProps) => {
  const { data } = weatherApi.useGetWeatherCityQuery(city);
  const dispatch = useAppDispatch();
  const { removeCity } = citySlice.actions;

  return data ? (
    <Card sx={{ display: 'flex', maxHeight: 200 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {city}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Temp: {Math.round(data.main.temp - 273.15)}°
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Humidity: {data.main.humidity}%
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Wind: {data.wind.speed} km/h
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
        alt="Weather now"
      ></CardMedia>
      <Box sx={{ display: 'flex', alignItems: 'start', p: 1 }}>
        <CloseIcon fontSize="small" onClick={() => dispatch(removeCity(city))} />
      </Box>
    </Card>
  ) : (
    <CityNotFound city={city} />
  );
};

export default CityItem;
