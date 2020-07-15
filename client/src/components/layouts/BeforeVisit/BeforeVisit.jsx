import React, { Fragment, useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import style from "./style";
import MyRadio from "./Radio";
import MyCheckbox from "./Checkbox";

const BeforeVisit = (props) => {
  const [InfectedCovid19, setInfectedCovid19] = useState(false);

  const {
    formField: { appointmentType, product, covid19 },
  } = props;

  const appointmentOption = [
    { value: "inPerson", label: "In person" },
    {
      value: "virtual",
      label: "Virtual",
    },
  ];

  const furnitureSector = [
    { value: "Bedroom", label: "Bedrom" },
    { value: "Dining", label: "Dining" },
    { value: "Living", label: "Living" },
    { value: "Kids", label: "Kids" },
    { value: "Office", label: "Office" },
    { value: "mattress", label: "mattress" },
  ];
  const covidQuestion = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const classes = style();
  // useEffect(() => {
  //   covidQuestion.map((answer) => {
  //     console.log("the answer is:", answer);
  //     console.log("the questions is:", covidQuestion);

  //     if (covidQuestion.value === "yes") setInfectedCovid19(true);
  //   });
  // }, InfectedCovid19);

  const handleChange = () => {
    console.log(covidQuestion.value)
    if (covidQuestion.value === "no") return setInfectedCovid19(true);
  };

  console.log(InfectedCovid19);
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
        onChange={handleChange}
        className={classes.formControl}
      />
    </Fragment>
  );
};

export default BeforeVisit;
