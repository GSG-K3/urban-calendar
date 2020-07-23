import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import InputField from '../../commonComponents/TabsCheckout/FormFields/InputField';

const ContactInfo = (props) => {
  const {
    formField: { fullName, phone, email, zipCode },
  } = props;
  return (
    <React.Fragment>
      <Box pb={1}>
        <Typography variant="h5" gutterBottom>
          Contact Information
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField
            required
            label={fullName.label}
            name={fullName.name}
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputField
            required
            label={phone.label}
            name={phone.name}
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputField
            required
            label={email.label}
            name={email.name}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            required
            label={zipCode.label}
            name={zipCode.name}
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ContactInfo;
