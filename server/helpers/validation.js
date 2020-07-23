const Yup = require('yup');

const checkValidation = (body) => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = Yup.object().shape({
    fullName: Yup.string().required('Name is required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('phone is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    zipCode: Yup.string()
      .matches(/^[0-9]{5}$/, 'Must be exactly 5 digits')
      .required('Zip code is required'),
    reservationDate: Yup.string().required('Date is required'),
    timeId: Yup.string().required('Time id is required'),
    reservationTime: Yup.string().required('Time is required'),
  });

  return schema.validate(body).catch((err) => {
    err.name;
    err.errors;
  });
};
module.exports = checkValidation;
