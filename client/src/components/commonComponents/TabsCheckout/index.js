import React, { useState, Fragment } from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Link,
} from '@material-ui/core';
import useStyles from './style';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    <Link color="inherit" href="https://www.urbannatural.com/">
      Urban natural
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

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
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Urban Natural
          </Typography>
        </Toolbar>
      </AppBar>

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
              <Fragment>
                <Typography variant="h6" gutterBottom>
                  Thank you!
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Our health and saftey rules
                </Typography>
                <Typography variant="subtitle1">
                  1. All visitors must wear face masks before entering the
                  building.
                  <br />
                  2. No more than 3 People allowed to be in the showroom at
                  once.
                  <br />
                  3. Make sure to follow the American Red Cross Instuctions of
                  Saftey.
                </Typography>
              </Fragment>
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
