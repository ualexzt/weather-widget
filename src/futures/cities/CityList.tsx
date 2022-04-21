import React from 'react';
import CityItem from './CityItem';
import { Container } from '@mui/material';

const CityList = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: 'flex', flexWrap: 'wrap', mt: 2, justifyContent: 'center' }}
    >
      <CityItem />
    </Container>
  );
};

export default CityList;
