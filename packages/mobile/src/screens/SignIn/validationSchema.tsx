import * as React from 'react';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup
    .string()
    .label('Email')
    .email()
    .required(),
    password: yup
    .string()
    .label("Password")
    .required().min(8, 'Password is to short, min 8 characters')
    .max(20, 'Password should have max 20 characters')
});

export default validationSchema;