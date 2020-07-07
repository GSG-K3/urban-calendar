import React from 'react';
import { TextField, Typography, Grid } from '@material-ui/core';

const ContactInfo = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fullName"
            label="Full Name"
            name="fullName"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            label="Phone"
            name="phone"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zipCode"
            name="zipCode"
            label="Zip / Postal code"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ContactInfo;
