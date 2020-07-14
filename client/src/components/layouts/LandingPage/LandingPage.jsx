import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import footer from '../../../assets/footer.svg';
import image from '../../../assets/image.svg';
import useStyles from './style.js';

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid item xs={12}>
        <div className={classes.landingContainer}>
          <div className={classes.landingContent}>
            <Typography className={classes.description}>
              To prevent the spread of COVID-19 and reduce the potential risk of
              exposure to our staff and visitors, all visitors must complete an
              intake form before booking an appointment.To begin this quick and
              easy process, click Book Appointment below.
            </Typography>
            <Link to="/guideline" className={classes.link}>
              <Button
                variant="contained"
                color="primary"
                className={classes.bookappointment}
              >
                Book an Appointment
              </Button>
            </Link>
          </div>
          <img src={image} className={classes.landingImg} alt="landing" />
        </div>
      </Grid>

      <img src={footer} className={classes.footer} alt="footer" />
    </div>
  );
};
export default LandingPage;
