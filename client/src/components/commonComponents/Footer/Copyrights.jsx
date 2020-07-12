import React from 'react';
import { Link, Typography } from '@material-ui/core/';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    <Link color="inherit" href="https://www.urbannatural.com/">
      Urban natural
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

export default Copyright;
