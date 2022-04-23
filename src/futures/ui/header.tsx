import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useAppDispatch } from '../../app/reducer';
import { citySlice } from '../cities/CitySlice';

const Header = () => {
  const [city, setCity] = useState('');
  const dispatch = useAppDispatch();
  const { addCity } = citySlice.actions;

  return (
    <>
      <Typography variant="h2" align="center" mt={1}>
        Weather forecast
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          gap: 3,
        }}
      >
        <TextField
          value={city}
          onChange={(e) => setCity(e.target.value)}
          id="outlined-basic"
          label="Add city..."
          variant="outlined"
          sx={{ width: 400 }}
        />
        <Button
          onClick={() => {
            dispatch(addCity(city));
            setCity('');
          }}
          variant="contained"
          size="large"
          startIcon={<SendIcon />}
        >
          Add
        </Button>
      </Box>
    </>
  );
};

export default Header;
