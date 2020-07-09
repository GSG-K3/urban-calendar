import React, { useState, Fragment } from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from '@material-ui/core';
import useStyles from './style';
import Confirmation from '../../layouts/ConfirmationTab';
import Copyright from '../Footer';

const tabs = ['Contact Info', 'Questions', 'Book'];

const getTabContent = (tab) => {
  switch (tab) {
    case 0:
      // TODO: each return must call its relevant tab page component
      return <>Contact Info </>;
    case 1:
      return <>Questions </>;
    case 2:
      return <>Booking </>;
    default:
      throw new Error('Unknown tab');
  }
};

const TabsCheckout = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const handleNext = () => {
    setActiveTab(activeTab + 1);
  };
  const handleBack = () => {
    setActiveTab(activeTab - 1);
  };
  return (
    <Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeTab} className={classes.stepper}>
            {tabs.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Fragment>
            {activeTab === tabs.length ? (
              <Confirmation />
            ) : (
              <Fragment>
                {getTabContent(activeTab)}
                <div className={classes.buttons}>
                  {activeTab !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeTab === tabs.length - 1 ? 'Confirm' : 'Next'}
                  </Button>
                </div>
              </Fragment>
            )}
          </Fragment>
        </Paper>
        <Copyright />
      </main>
    </Fragment>
  );
};

export default TabsCheckout;
