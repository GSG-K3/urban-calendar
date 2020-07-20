import React from 'react';
import error404 from '../../../assets/error404.png';
import { Grid, Box } from '@material-ui/core';
const pageNotFound = () => {
  return (
    <Grid xs={12}>
      <Box display='flex' justifyContent='center' justifyContent='center'>
        <img src={error404} alt= 'error'/>
      </Box>
    </Grid>
  );
};
export default pageNotFound;
