import React, { useState } from 'react';
import CityItem from './CityItem';
import CityMain from './CityMain';
import { Box, Grid, Pagination } from '@mui/material';
import { useAppSelector } from '../../app/reducer';

const CityList = () => {
  const { cities } = useAppSelector((state) => state.cityReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const pages = Math.ceil(cities.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCities = cities.slice(indexOfFirstItem, indexOfLastItem);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      <Grid item xs={3}>
        <CityMain />
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
          {currentCities.map((city) => (
            <CityItem key={city} city={city} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={3}>
        {currentCities.length > 0 ? (
          <Pagination
            count={pages}
            page={currentPage}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default CityList;
