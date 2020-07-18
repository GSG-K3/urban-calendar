import React, { useState, Fragment } from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import axios from 'axios';
import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';
import ContactInfo from '../../layouts/ContactInfo';
import BeforeVisit from '../../layouts/BeforeVisit';
import Booking from '../../layouts/Booking';
import Confirmation from '../../layouts/ConfirmationTab';
import Copyright from '../Footer';
import useStyles from './style';

const steps = ['Contact Info', 'Questions', 'Book'];
const { formId, formField } = checkoutFormModel;

const renderStepContent = (step, covidAnswer) => {
  switch (step) {
    case 0:
      return <ContactInfo formField={formField} />;
    case 1:
      return <BeforeVisit formField={formField} />;
    case 2:
      return <Booking formField={formField} covidAnswer={covidAnswer} />;
    default:
      throw new Error('Unknown tab');
  }
};

const TabsCheckout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [covidAnswer, setCovidAnswer] = useState('no');
  const currentValidationSchema = validationSchema[activeStep];

  const isLastStep = activeStep === steps.length - 1;
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const submitForm = async (values, actions) => {
    await sleep(1000);
    const { fullName, phone, email, zipCode, reservationTime } = values;

    const customerInfo = {
      fullName,
      phone,
      email,
      zipCode,
      reservationDate: reservationTime.substr(1),
      timeId: reservationTime.charAt(0),
    };
    // the response will be used to setState for the confirmation alert later.
    axios
      .post('/api/questions/user-info', customerInfo)
      .then((res) => res.data)
      .catch((err) => err.response.data.message);

    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else if (activeStep === 1) {
      setCovidAnswer(values.covid19);
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
      if (values.covid19 === 'yes') {
        //TODO: This needs to be changed later with a better pop-up styling
        alert(
          'Your reservation will be postponed for 2 weeks from now due to your health situation',
        );
      }
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={10}>
          <Typography component="h1" variant="h4" align="center">
            Reservation
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Fragment>
            {activeStep === steps.length ? (
              <Confirmation />
            ) : (
              <Formik
                initialValues={formInitialValues}
                validationSchema={currentValidationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form id={formId}>
                    {renderStepContent(activeStep, covidAnswer)}

                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <div>
                        <Button
                          disabled={isSubmitting}
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={classes.button}
                        >
                          {isLastStep ? 'Book Now!' : 'Next'}
                        </Button>
                        {isSubmitting && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </Fragment>
        </Paper>
        <Copyright />
      </main>
    </Fragment>
  );
};

export default TabsCheckout;
