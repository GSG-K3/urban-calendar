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
import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';
import Swal from 'sweetalert2';
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
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const submitForm = async (values, actions) => {
    await sleep(1000);
    const swalWithBootstrapButtons = Swal.mixin({
    
       buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      //  imageUrl: 'https://image.freepik.com/free-vector/people-illustration-with-calendar-schedule_40677-12.jpg',
      //  imageHeight: 100,
      //  imageWidth: 100,
      //  imageAlt: 'A tall image', 
      title: 'Are you sure?',
      text: values.email,
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#90B27A',
      cancelButtonColor: '#FF7171',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
       
          actions.setSubmitting(false)
              setActiveStep(activeStep+1)
        
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        
          actions.setSubmitting(false)
         setActiveStep(activeStep)
        
      }
    })
    
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
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
