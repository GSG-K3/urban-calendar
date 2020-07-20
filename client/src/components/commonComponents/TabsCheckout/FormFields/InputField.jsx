import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

const InputField = (props) => {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  const renderHelperText = () => {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  };

  return (
    <TextField
      type="text"
      error={meta.touched && meta.error && true}
      helperText={renderHelperText()}
      {...field}
      {...rest}
    />
  );
};
export default InputField;
