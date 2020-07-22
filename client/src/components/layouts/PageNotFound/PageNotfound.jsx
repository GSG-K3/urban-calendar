import React from 'react';
import error404 from '../../../assets/error404.png';
import { Grid, Box } from '@material-ui/core';
import useStyles from './style';
const PageNotFound = () => {
  const classes = useStyles();
  return (
    <div>
    <Grid xs={12}>
      <Box display='flex' justifyContent='center'>
        <img className={classes.error404} src={error404} alt= 'error'/>
      </Box>
    </Grid>
    </div>
  );
};
export default PageNotFound;
