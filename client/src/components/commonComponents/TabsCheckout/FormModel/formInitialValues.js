import checkoutFormModel from './checkoutFormModel';

const {
  formField: { fullName, phone, email, zipCode },
} = checkoutFormModel;

export default {
  [fullName.name]: '',
  [phone.name]: '',
  [email.name]: '',
  [zipCode.name]: '',
};
