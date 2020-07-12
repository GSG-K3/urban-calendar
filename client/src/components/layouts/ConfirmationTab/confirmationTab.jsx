import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

const Confirmation = () => (
  <Fragment>
    <Typography variant="h6" gutterBottom>
      Thank you!
    </Typography>
    <Typography variant="h6" gutterBottom>
      Our health and safety rules
    </Typography>
    <Typography variant="subtitle1">
      1. All visitors must wear face masks before entering the building.
      <br />
      2. No more than 3 People allowed to be in the showroom at once.
      <br />
      3. Make sure to follow the American Red Cross Instuctions of Safety.
    </Typography>
  </Fragment>
);

export default Confirmation;
