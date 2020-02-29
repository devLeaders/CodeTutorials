import * as React from 'react';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Żeby się zarejestrować musisz podać email')
    .max(255),

  password: yup
    .string()
    .required('Żeby się zarejestrować musisz podać hasło')
    .min(8, 'za krótkie hasło')
    .max(255),
  passwordConfirmation: yup
    .string()
    .required('Żeby się zarejestrować musisz podać hasło')
    .min(8, 'za krótkie hasło')
    .max(255)
    .oneOf([yup.ref('password'), null], 'hasła muszą być takie same'),
});

export default validationSchema;
