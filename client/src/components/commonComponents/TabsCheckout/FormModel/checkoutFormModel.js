export default {
  formId: 'checkoutForm',
  formField: {
    fullName: {
      name: 'fullName',
      label: 'Full Name',
      requiredErrorMsg: 'Full Name is required',
    },
    phone: {
      name: 'phone',
      label: 'Phone',
      requiredErrorMsg: 'Phone is required',
    },
    email: {
      name: 'email',
      label: 'Email',
      requiredErrorMsg: 'Email is required',
    },
    zipCode: {
      name: 'zipCode',
      label: 'Zip/Postal Code',
      requiredErrorMsg: 'Zip/Postal Code is required',
    },
    appointmentType: {
      name: 'meeting',
      label: 'Meeting',
      requiredErrorMsg: 'Meeting type is required',
    },
    product: {
      name: 'product',
      label: 'Product',
      requiredErrorMsg: 'Choose at least one product',
    },
    covid19: {
      name: 'covid19',
      label: 'Covid-19',
      requiredErrorMsg: 'This field is required',
    },
  },
};
