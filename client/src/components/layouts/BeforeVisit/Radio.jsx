import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const RadioButton = (props) => {
  const { data, name } = props;
  const [field, meta] = useField(props);

  const [touched, error] = at(meta, 'touched', 'error');
  const fieldName = name || field.name;

  const renderHelperText = () => {
    if (touched && error) {
      return error;
    }
  };
  return (
    <React.Fragment>
      <RadioGroup {...field} {...props} name={fieldName}>
        {data.map((item) => (
          <FormControlLabel
            key={item.label}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
      <React.Fragment>{renderHelperText()}</React.Fragment>
    </React.Fragment>
  );
};

export default RadioButton;
