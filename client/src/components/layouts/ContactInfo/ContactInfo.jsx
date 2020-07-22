import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import InputField from '../../commonComponents/TabsCheckout/FormFields/InputField';

const ContactInfo = (props) => {
  const {
    formField: { fullName, phone, email, zipCode },
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
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
