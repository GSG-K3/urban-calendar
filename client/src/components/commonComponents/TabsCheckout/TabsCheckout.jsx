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
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
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

const steps = ['Contact Info', 'Questions', 'Book']; // store tabs titles
const { formId, formField } = checkoutFormModel;

// specify each tab content
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
  // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // when the user reaches the last step of checkout and submit the form
  const submitForm = async (values, actions) => {
    // await sleep(1000);
    // form fields values that comes from each form in each tab
    const { fullName, phone, email, zipCode, reservationTime } = values;

    // reservation time consists of time id, date and time seperated by @
    const dateInfo = reservationTime.split('@');

    // confiramtion pop up configuration
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true,
    });
    swalWithBootstrapButtons
      .fire({
        imageUrl:
          'https://www.southislandmsa.ca/wp-content/uploads/2018/03/calendar-flat-icon-01-.jpg',
        imageHeight: 100,
        imageWidth: 150,
        imageAlt: 'calendar image',
        title: 'Are you sure?',
        text: `Your Appointment will be on ${
          dateInfo[1]
        } at ${dateInfo[2].slice(0, 5)}`, // slice used to get the date as hh:mm and remove the seconds
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#90B27A',
        cancelButtonColor: '#FF7171',
        reverseButtons: true,
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      })
      .then((result) => {
        if (result.value) {
          // if the user confirmed the reservation post his/her data into database
          const customerInfo = {
            fullName,
            phone,
            email,
            zipCode,
            reservationDate: dateInfo[1],
            timeId: dateInfo[0],
            reservationTime: dateInfo[2],
          };

          axios
            .post('/api/questions/user-info', customerInfo)
            .then((res) => res.data)
            .catch((err) => err.response.data.message);

          actions.setSubmitting(false); // finish the cycle
          setActiveStep(activeStep + 1); // go to next tab
        }
        // if the user didn't confirm th reservation it will be back to the calendar page
        else if (result.dismiss === Swal.DismissReason.cancel) {
          actions.setSubmitting(false);
          setActiveStep(activeStep);
        }
      });
  };

  // handle next or submit button for each tab
  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else if (activeStep === 1) {
      // check if the answer of covid question is yes, a pop up will appear to tell the user that he/she can make a reservation after two weeks from the current day
      setCovidAnswer(values.covid19);
      if (values.covid19 === 'yes') {
        Swal.fire({
          title: 'Bless you',
          text:
            'You can make a reservation after 2 weeks from now due to your health situation.Thank you for your understanding',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
          imageUrl:
            ' https://cdn.dribbble.com/users/3691882/screenshots/11018522/media/0047aad1a6fb3aa4362d6acd69059924.gif',
          imageAlt: 'Custom image',
          confirmButtonText: 'I understand',
          confirmButtonColor: '#90B27A',
        }).then((res) => {
          if (res) {
            setActiveStep(activeStep + 1);
            actions.setTouched({}); // to check the validation
            actions.setSubmitting(false);
          }
        });
      }
      // if the answer of covid question was no, the process will continue without any pop up
      else {
        setActiveStep(activeStep + 1);
        actions.setTouched({});
        actions.setSubmitting(false);
      }
    }
    // handle the current step if it wasn't the last one or step 1
    else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };
  // handle back button
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
