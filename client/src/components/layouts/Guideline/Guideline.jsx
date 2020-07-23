import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  Paper,
  Box,
} from '@material-ui/core';
import useStyles from './style';

const getSteps = () => [
  'Basic contact info',
  'Before visit questions',
  'Pick date and time',
];
const Guideline = () => {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <main className={classes.layout}>
      <Paper elevation={10} className={classes.paper}>
        <Box className={classes.root}>
          <Box className={classes.titles}>
            <Typography className={classes.header}>
              We’ll take you through our 3-step booking process
            </Typography>
            <Typography className={classes.description}>
              To prevent the spread of COVID-19 and reduce the potential risk of
              exposure to our staff and visitors. we will take through this very
              quick process.
            </Typography>
          </Box>
          <Stepper activeStep={-1} orientation="vertical">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  classes={{ label: classes.label }}
                  StepIconProps={{
                    classes: { root: classes.stepIcon },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <Link to="/reservation" className={classes.startLink}>
            <Button variant="contained" className={classes.button}>
              START
            </Button>
          </Link>
        </Box>
      </Paper>
    </main>
  );
};

export default Guideline;
