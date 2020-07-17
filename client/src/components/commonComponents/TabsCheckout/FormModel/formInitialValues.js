import checkoutFormModel from './checkoutFormModel';

const {
  formField: {
    fullName,
    phone,
    email,
    zipCode,
    appointmentType,
    product,
    covid19,
    reservationTime,
  },
} = checkoutFormModel;

export default {
  [fullName.name]: '',
  [phone.name]: '',
  [email.name]: '',
  [zipCode.name]: '',
  [appointmentType.name]: '',
  [product.name]: [],
  [covid19.name]: '',
  [reservationTime.name]: '',
};
