import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components/native';
import {View, Alert, ActivityIndicator} from 'react-native';
import {Formik} from 'formik';

import FormikInput from './FormikInput';
import SignUpBtn from './SignUpBtn';
import validationSchema from '../actions/validationSchema';
import handleFormSubmit from '../actions/handleFormSubmit';

const Wrapper = styled.View`
  margin-top: 40px;
  width: 100%;
  align-items: center;
`;
const FormWrapper = styled.View`
  width: 100%;
`;

enum InputTypes {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export interface InputSectionProps {}

const InputSection: React.SFC<InputSectionProps> = () => {
  return (
    <Wrapper>
      <Formik
        initialValues={{email: '', password: '', passwordConfirmation: ''}}
        onSubmit={(values, actions) => handleFormSubmit(values, actions)}
        validateOnChange={false}
        validationSchema={validationSchema}>
        {({
          handleChange,
          handleSubmit,
          values,
          isSubmitting,
          errors,
          resetForm,
        }) => (
          <FormWrapper>
            <FormikInput
              type={InputTypes}
              src="email"
              change={handleChange('email')}
              value={values.email}
              holder="email"
              inputError={errors.email}
            />
            <FormikInput
              type={InputTypes}
              src="password"
              change={handleChange('password')}
              value={values.password}
              holder="wprowadź hasło"
              inputError={errors.password}
            />
            <FormikInput
              type={InputTypes}
              src="password"
              change={handleChange('passwordConfirmation')}
              value={values.passwordConfirmation}
              holder="powtórz hasło"
              inputError={errors.passwordConfirmation}
              onSubmitEditing={() => handleFormSubmit(values, resetForm)}
              returnKeyType="send"
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
