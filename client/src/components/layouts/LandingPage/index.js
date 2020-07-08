import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import image from './image.svg';
import footer from './footer.svg';
import useStyles from './style.js';

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid item xs={12}>
        <div className={classes.landing}>
          <div className={classes.description}>
            <Typography className={classes.text}>
              To prevent the spread of COVID-19 and reduce the potential risk of
              exposure to our staff and visitors, all visitors must complete an
              intake form before booking an appointment.To begin this quick and
              easy process, click Book Appointment below.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Book an Appointment
            </Button>
          </div>
          <img src={image} className={classes.image} />
        </div>
      </Grid>

      <img src={footer} className={classes.footer} />
    </div>
  );
};
export default LandingPage;
