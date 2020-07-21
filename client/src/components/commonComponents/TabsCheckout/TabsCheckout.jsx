import React, { useState, Fragment } from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  TextareaAutosize,
} from '@material-ui/core';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Formik, Form } from 'formik';
import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';

import ContactInfo from '../../layouts/ContactInfo';
import BeforeVisit from '../../layouts/BeforeVisit';
import Confirmation from '../../layouts/ConfirmationTab';
import Copyright from '../Footer';
import useStyles from './style';

const steps = ['Contact Info', 'Questions', 'Book'];
const { formId, formField } = checkoutFormModel;

const renderStepContent = (step) => {
  switch (step) {
    case 0:
      return <ContactInfo formField={formField} />;
    case 1:
      return <BeforeVisit formField={formField} />;
    case 2:
      return <>Booking </>;
    default:
      throw new Error('Unknown tab');
  }
};

const TabsCheckout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];

  const isLastStep = activeStep === steps.length - 1;
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const submitForm = async (values, actions) => {
    await sleep(1000);
    // alert here will be replaced with API post request to store the data into database when reserving the date
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else if (activeStep === 1) {
      if (values.covid19 === 'yes') {
        swal.fire({
          title: 'Bless you',
          text:
            'Your reservation will be postponed for 2 weeks from now due to your health situation. Thank you for your understanding',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
          imageUrl:
            ' https://cdn.dribbble.com/users/3691882/screenshots/11018522/media/0047aad1a6fb3aa4362d6acd69059924.gif',
          imageAlt: 'Custom image',
          // 'https://image.freepik.com/free-vector/family-protected-from-virus_23-2148575207.jpg',
          // 'https://cdn.dribbble.com/users/419546/screenshots/2975220/gif1.gif',
          //  'https://cdn.dribbble.com/users/1843582/screenshots/11321910/03._hand_sanitizer.gif',
          confirmButtonText: 'I understand',
          showLoaderOnConfirm: true,
          confirmButtonColor: '#02C6C0',
          focusConfirm: true,
        });
      }
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
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
                    {renderStepContent(activeStep)}

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
