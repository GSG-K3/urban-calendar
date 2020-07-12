import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  Paper,
  Grid,
} from '@material-ui/core';
import useStyles from './style';

const getSteps = () => [
  'Basic contact info',
  'Questionnaire',
  'Pick date and time',
];
const Guideline = () => {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <main className={classes.layout}>
      <Paper elevation={10} className={classes.paper}>
        <div className={classes.root}>
          <Grid item xs={12}>
            <Typography className={classes.header}>
              We’ll take you through our 3-step booking process
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.description}>
              To prevent the spread of COVID-19 and reduce the potential risk of
              exposure to our staff and visitors. we will take through this very
              quick process.
            </Typography>
          </Grid>

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
          <Button variant="contained" className={classes.button}>
            <Link to="/reservation" className={classes.startLink}>
              START
            </Link>
          </Button>
        </div>
      </Paper>
    </main>
  );
};

export default Guideline;
