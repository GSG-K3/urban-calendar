import React, { Fragment, useState } from "react";
import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
import style from "./style";

const BeforeVisit = () => {
  const classes = style();
  const [meeting, setMeeting] = useState();
  const [furniture, setFurniture] = useState();
  const [covid, setCovid] = useState();

  const handleChangeMeeting = (event) => {
    setMeeting(event.target.value);
  };
  const handleChangeCovid = (event) => {
    setCovid(event.target.value);
  };
  const handleChangeFurniture = (event) => {
    setFurniture(event.target.value);
  };

  return (
    <Fragment>
      <Typography variant="h5">Before visit</Typography>
      <Typography variant="h6">
        Would you like to reserve a virtual appointment or in person?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="meeting"
          name="meeting1"
          value={meeting}
          onChange={handleChangeMeeting}
        >
          <FormControlLabel
            value="In person"
            control={<Radio color="primary" />}
            label="In person"
          />
          <FormControlLabel
            value="virtual "
            control={<Radio color="primary" />}
            label="Virtual"
          />
        </RadioGroup>
      </FormControl>
      <Typography variant="h6" gutterBottom>
        What are you interested in viewing? select all that apply
      </Typography>
    
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup variant="body2">
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={furniture}
                onChange={handleChangeFurniture}
                name="Bedroom"
              />
            }
            label="Bedroom"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={furniture}
                onChange={handleChangeFurniture}
                name="Dining"
              />
            }
            label="Dining"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={furniture}
                onChange={handleChangeFurniture}
                name="Living"
              />
            }
            label="Living"
          />{" "}
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={furniture}
                onChange={handleChangeFurniture}
                name="Office"
              />
            }
            label="Office"
          />{" "}
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={furniture}
                onChange={handleChangeFurniture}
                name="Kids & baby"
              />
            }
            label="Kids & baby"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={furniture}
                onChange={handleChangeFurniture}
                name="Organic Mattress"
              />
            }
            label="Organic Mattress"
          />
        </FormGroup>
      </FormControl>
      <Typography variant="h6" gutterBottom>
        Have you been in contact within the last 14 days with anyone who has
        experienced any covid-symptoms?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Covid-19"
          name="Covid19"
          value={covid}
          onChange={handleChangeCovid}
        >
          <FormControlLabel
            value="Yes"
            control={<Radio color="primary" />}
            label="Yes"
          />
          <FormControlLabel
            value="No"
            control={<Radio color="primary" />}
            label="No"
          />
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
};

export default BeforeVisit;
