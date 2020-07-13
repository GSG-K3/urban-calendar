import React from 'react';
import { at } from 'lodash';
import { useField, Field, Form } from 'formik';
import { Checkbox } from '@material-ui/core';

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
      <Form {...field} {...props}>
        {data.map((item) => (
          <label key={item.label}>
            <Field
              type="checkbox"
              value={item.value}
              as={Checkbox}
              name={fieldName}
            />
            {item.label}
          </label>
        ))}
      </Form>
      <React.Fragment>{renderHelperText()}</React.Fragment>
    </React.Fragment>
  );
};

export default RadioButton;
