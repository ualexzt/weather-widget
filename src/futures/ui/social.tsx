import React from 'react';
import { Box, IconButton } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const SocialFooter = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0,
        textAlign: 'center',
      }}
    >
      <IconButton color="primary">
        <AppleIcon fontSize="large" />
      </IconButton>
      <IconButton color="primary">
        <InstagramIcon fontSize="large" />
      </IconButton>
      <IconButton color="primary">
        <FacebookOutlinedIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default SocialFooter;
