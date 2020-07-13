import React, { Fragment, useState } from 'react';
import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Checkbox,
  FormGroup,
} from '@material-ui/core';
import style from './style';
import MyRadio from './Radio';
import MyCheckbox from './Checkbox';

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
  const covid = [
    { value: 'yes', label: 'Yes' },
    {
      value: 'no',
      label: 'No',
    },
  ];
  const products = [
    { value: 'Bedroom', label: 'Bedrom' },
    { value: 'Dining', label: 'Dining' },
    { value: 'Living', label: 'Living' },
    { value: 'Kids', label: 'Kids' },
  ];

  const classes = style();

  return (
    <Fragment>
      <Typography variant="h5">Before visit</Typography>
      <Typography variant="h6">
        Would you like to reserve a virtual appointment or in person?
      </Typography>
      <MyRadio
        data={appointmentOption}
        name={appointmentType.name}
        label={appointmentType.label}
      />
      <Typography variant="h6" gutterBottom>
        What are you interested in viewing? select all that apply
      </Typography>
      <MyCheckbox
        data={products}
        name={product.name}
        label={product.label}
        className={classes.formControl}
      />
      <Typography variant="h6" gutterBottom>
        Have you been in contact within the last 14 days with anyone who has
        experienced any covid-symptoms?
      </Typography>
      <MyRadio data={covid} name={covid19.name} label={covid19.label} />
    </Fragment>
  );
};

export default BeforeVisit;
