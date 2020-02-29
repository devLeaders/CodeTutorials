import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components/native';
import {View, Alert, ActivityIndicator} from 'react-native';
import {Formik} from 'formik';

import FormikInput from './FormikInput';
import SignUpBtn from './SignUpBtn';
import validationSchema from '../../functions/validationSchema';
import handleFormSubmit from '../../functions/handleFormSubmit';

const Wrapper = styled.View`
  margin-top: 40px;
  height: 200px;
  width: 100%;
  align-items: center;
`;
const FormWrapper = styled.View`
  width: 100%;
`;

export interface InputSectionProps {}

const InputSection: React.SFC<InputSectionProps> = () => {
  return (
    <Wrapper>
      <Formik
        initialValues={{email: '', password: '', passwordConfirmation: ''}}
        onSubmit={(values, actions) => handleFormSubmit(values, actions)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, values, isSubmitting, errors}) => (
          <FormWrapper>
            <FormikInput
              type="email"
              src="email"
              change={handleChange('email')}
              value={values.email}
              holder="email"
              inputError={errors.email}
            />
            <FormikInput
              type="password"
              src="password"
              change={handleChange('password')}
              value={values.password}
              holder="wprowadź hasło"
              inputError={errors.password}
            />
            <FormikInput
              type="password"
              src="password"
              change={handleChange('passwordConfirmation')}
              value={values.passwordConfirmation}
              holder="powtórz hasło"
              inputError={errors.passwordConfirmation}
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
