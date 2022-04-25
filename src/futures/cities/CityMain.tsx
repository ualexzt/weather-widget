import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import ExpandIcon from '@mui/icons-material/Expand';
import AirIcon from '@mui/icons-material/Air';
import { weatherApi } from '../../app/weatherApi';

const CityMain = () => {
  const [lat, setLet] = useState(0);
  const [lon, setLon] = useState(0);
  const { data } = weatherApi.useGetWeatherCoordQuery({ lat, lon });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLet(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);
  console.log(data);
  return data ? (
    <Card sx={{ display: 'flex', maxWidth: 450 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: 200,
          alignItems: 'center',
          gap: 1,
          p: 2,
        }}
      >
        <Typography component="div" variant="h2" align="center">
          {Math.round(data.main.temp - 273.15)}°
        </Typography>
        <CardMedia
          component="img"
          sx={{ width: 120 }}
          image={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt="Weather now"
        ></CardMedia>
        <Typography component="div" variant="body1" align="center">
          {data.weather[0].main}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
        <CardContent sx={{ flex: '1 0 auto', minWidth: 250 }}>
          <Typography component="div" variant="h5" mb={1}>
            {data?.name}
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            display="flex"
            flexDirection="row"
            alignItems="center"
            mb={2}
            gap={2}
          >
            <AddLocationAltIcon /> Lon / Lat: {Math.round(lon)}°/{Math.round(lat)}°
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={2}
          >
            <ThermostatIcon /> High / Low {Math.round(data.main.temp_max - 273.15)}°/{' '}
            {Math.round(data.main.temp_min - 273.15)}°
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={2}
          >
            <InvertColorsIcon />
            Humidity: {data.main.humidity}%
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={2}
          >
            <ExpandIcon />
            Pressure: {data.main.pressure} mb
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={2}
          >
            <AirIcon />
            Wind: {data.wind.speed} km/h
          </Typography>
        </CardContent>
      </Box>
    </Card>
  ) : (
    <h1>No data</h1>
  );
};

export default CityMain;
