import checkoutFormModel from './checkoutFormModel';

const {
  formField: { fullName, phone, email, zipCode, appointmentTime },
} = checkoutFormModel;

export default {
  [fullName.name]: '',
  [phone.name]: '',
  [email.name]: '',
  [zipCode.name]: '',
  [appointmentTime.name]: '',
};
