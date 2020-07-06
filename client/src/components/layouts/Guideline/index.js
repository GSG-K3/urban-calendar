import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './style';

function getSteps() {
  return [
    'Basic contact info',
    'Questionnaire',
    'Pick date and time',
  ];
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div>
      <div className={classes.root}>
        <Typography className={classes.header}>
          We’ll take you through our 3-step booking process
        </Typography>
        <Typography className={classes.description}>
          To prevent the spread of COVID-19 and reduce the potential risk of
          exposure to our staff and visitors. we will take through this very
          quick process.
        </Typography>

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
          START
        </Button>
      </div>
    </div>
  );
}
