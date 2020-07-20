import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import style from './style';
import MyRadio from '../../commonComponents/TabsCheckout/FormFields/Radio';
import MyCheckbox from '../../commonComponents/TabsCheckout/FormFields/Checkbox';

const BeforeVisit = (props) => {
  const {
    formField: { appointmentType, product, covid19 },
  } = props;
  const appointmentOption = [
    { value: 'inPerson', label: 'In person' },
    {
      value: 'virtual',
      label: 'Virtual',
    },
  ];
  const covidQuestion = [
    { value: 'yes', label: 'Yes' },
    {
      value: 'no',
      label: 'No',
    },
  ];
  const furnitureSector = [
    { value: 'Bedroom', label: 'Bedrom' },
    { value: 'Dining', label: 'Dining' },
    { value: 'Living', label: 'Living' },
    { value: 'Kids', label: 'Kids' },
    { value: 'Office', label: 'Office' },
    { value: 'mattress', label: 'mattress' },
  ];

  const classes = style();

  return (
    <Fragment>
      <Typography variant="h5">Before visit</Typography>
      <Typography variant="h6">
        1- Would you like to reserve a virtual appointment or in person?
      </Typography>
      <MyRadio
        data={appointmentOption}
        name={appointmentType.name}
        label={appointmentType.label}
        className={classes.formControl}
      />
      <Typography variant="h6" gutterBottom>
        2- What are you interested in viewing? Select all that apply
      </Typography>
      <MyCheckbox
        data={furnitureSector}
        name={product.name}
        label={product.label}
        className={classes.formControl}
      />
      <Typography variant="h6" gutterBottom>
        3- Have you been in contact within the last 14 days with anyone who has
        experienced any covidQuestion symptoms?
      </Typography>
      <MyRadio
        data={covidQuestion}
        name={covid19.name}
        label={covid19.label}
        className={classes.formControl}
      />
    </Fragment>
  );
};

export default BeforeVisit;
