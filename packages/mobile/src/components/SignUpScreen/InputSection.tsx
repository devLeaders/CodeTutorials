import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import {View, Alert, ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

import FormikInput from './FormikInput';
import SignUpBtn from './SignUpBtn';

const Wrapper = styled.View`
  margin-top: 15%;
  height: 200px;
  width: 100%;
  /* background-color: black; */
  align-items: center;
`;
const FormWrapper = styled.View`
  width: 100%;
`;

export interface InputSectionProps {}

const InputSection: React.SFC<InputSectionProps> = () => {
  const handleFormSubmit = (values: any, actions: any) => {
    actions.resetForm();
    Alert.alert(JSON.stringify(values));
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 1000);
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required('Żeby się zarejestrować musisz podać email')
      .max(255),
    name: yup
      .string()
      .required('Żeby się zarejestrować musisz podać nazwe użytkownika')
      .min(6, 'za krótka nazwa użytkownika'),
    password: yup
      .string()
      .required('Żeby się zarejestrować musisz podać hasło')
      .min(8, 'za krótkie hasło')
      .max(255),
  });

  return (
    <Wrapper>
      <Formik
        initialValues={{email: '', name: '', password: ''}}
        onSubmit={(values, actions) => handleFormSubmit(values, actions)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, values, isSubmitting, errors}) => (
          <FormWrapper>
            <FormikInput
              type="userName"
              src="user"
              change={handleChange('name')}
              value={values.name}
              holder="name"
            />
            <FormikInput
              type="email"
              src="email"
              change={handleChange('email')}
              value={values.email}
              holder="email"
            />
            <FormikInput
              type="password"
              src="password"
              change={handleChange('password')}
              value={values.password}
              holder="password"
            />
            {isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <SignUpBtn handleSubmit={handleSubmit} />
            )}
          </FormWrapper>
        )}
      </Formik>
    </Wrapper>
  );
};

export default InputSection;
