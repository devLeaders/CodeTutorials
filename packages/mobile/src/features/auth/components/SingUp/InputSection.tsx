import * as React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';
import {Formik} from 'formik';

import FormikInput from '../../../common/components/FormikInput';
import SignUpBtn from './SignUpBtn';
import validationSchemaReg from '../../action/validationSchemaRegistration';
import handleFormSubmit from '../../action/handleFormSubmit';
import {user} from '../../../common/types/types';
import {InputTypes} from '../../../common/types/InputTypes';

const Wrapper = styled.View`
  margin-top: 40px;
  width: 100%;
  align-items: center;
`;
const FormWrapper = styled.View`
  width: 100%;
`;

export interface InputSectionProps {}

const InputSection: React.SFC<InputSectionProps> = () => {
  const handleSubmit = (values: user, actions: any) =>
    handleFormSubmit(values, actions);
  return (
    <Wrapper>
      <Formik
        initialValues={{email: '', password: '', passwordConfirmation: '', name:''}}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validationSchema={validationSchemaReg}>
        {({handleChange, handleSubmit, values, isSubmitting, errors}) => (
          <FormWrapper>
              <FormikInput
              type={InputTypes.NAME}
              src="user"
              change={handleChange('name')}
              value={values.name}
              holder="imie"
              inputError={errors.name}
            />
            <FormikInput
              type={InputTypes.EMAIL}
              src="email"
              change={handleChange('email')}
              value={values.email}
              holder="email"
              inputError={errors.email}
            />
            <FormikInput
              type={InputTypes.PASSWORD}
              src="password"
              change={handleChange('password')}
              value={values.password}
              holder="wprowadź hasło"
              inputError={errors.password}
            />
            <FormikInput
              type={InputTypes.PASSWORD}
              src="password"
              change={handleChange('passwordConfirmation')}
              value={values.passwordConfirmation}
              holder="powtórz hasło"
              inputError={errors.passwordConfirmation}
              onSubmitEditing={handleSubmit}
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
