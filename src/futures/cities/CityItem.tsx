import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

interface CityItemProps {
  city: string;
}

const CityItem = ({ city }: CityItemProps) => {
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {city}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            High / Low 26°/11°
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Humidity: 70%
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Wind: 13 km/h
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default CityItem;
