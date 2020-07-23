import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import footer from '../../../assets/footer.svg';
import image from '../../../assets/image.svg';
import useStyles from './style.js';

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.landingContainer}>
        <Box className={classes.landingContent}>
          <Typography className={classes.description}>
            As the lockdown and corona-virus begin to subside in New Jersey, We
            are looking to re-open our showroom with half capacity. To prevent
            the spread of COVID-19 and reduce the potential risk of exposure to
            our staff and visitors, all visitors must complete an intake form
            before booking an appointment. To begin this quick and easy process,
            click BOOK A VISIT below.
          </Typography>
          <Link to="/guideline" className={classes.link}>
            <Button
              variant="contained"
              color="primary"
              className={classes.bookappointment}
            >
              BOOK A VISIT
            </Button>
          </Link>
        </Box>
        <img src={image} className={classes.landingImg} alt="landing" />
      </Box>

      <img src={footer} className={classes.footer} alt="footer" />
    </div>
  );
};
export default LandingPage;
