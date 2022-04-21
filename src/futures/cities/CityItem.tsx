import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import ExpandIcon from '@mui/icons-material/Expand';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const CityItem = () => {
  return (
    <Card sx={{ display: 'flex', maxWidth: 450 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: 200,
          alignItems: 'center',
          gap: 3,
          p: 3,
        }}
      >
        <Typography component="div" variant="h2" align="center">
          12&deg;
        </Typography>
        <WbSunnyIcon sx={{ fontSize: 100 }} />
        <Typography component="div" variant="body1" align="center">
          Freezy
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', p: 3 }}>
        <CardContent sx={{ flex: '1 0 auto', minWidth: 250 }}>
          <Typography component="div" variant="h5" mb={1}>
            Kyiv
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            display="flex"
            flexDirection="row"
            alignItems="center"
            mb={5}
            gap={2}
          >
            <AddLocationAltIcon /> Lon / Lat 44°/23°
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
            <ThermostatIcon /> High / Low 26°/11°
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
            Humidity: 70%
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
            Pressure: 1030.1 mb
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
            Wind: 13 km/h
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
};

export default CityItem;
