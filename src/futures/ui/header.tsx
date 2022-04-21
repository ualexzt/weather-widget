import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Header = () => {
  return (
    <>
      <Typography variant="h2" align="center" mt={5}>
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
        <TextField id="outlined-basic" label="Add city..." variant="outlined" sx={{ width: 500 }} />
        <Button variant="contained" size="large" startIcon={<SendIcon />}>
          Add
        </Button>
      </Box>
    </>
  );
};

export default Header;
