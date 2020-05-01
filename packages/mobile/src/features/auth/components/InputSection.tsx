import * as React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
<<<<<<< HEAD

<<<<<<< HEAD:packages/mobile/src/features/auth/components/InputSection.tsx
import FormikInput from '../../common/components/FormikInput';
import SignUpBtn from './SignUpBtn';
import validationSchema from '../../common/actions/validationSchema';
import handleFormSubmit from '../../common/actions/handleFormSubmit';
import {user} from '../../common/types/types';
import {InputTypes} from '../../videos/action/InputTypes';
=======
=======
>>>>>>> qa2
import FormikInput from '../../../common/components/FormikInput';
import SignUpBtn from './SignUpBtn';
import validationSchemaReg from '../../action/validationSchemaRegistration';
import handleFormSubmit from '../../action/handleFormSubmit';
import {user} from '../../../common/types/types';
import {InputTypes} from '../../../common/types/InputTypes';
<<<<<<< HEAD
>>>>>>> qa2:packages/mobile/src/features/auth/components/SingUp/InputSection.tsx
=======
>>>>>>> qa2

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
        initialValues={{email: '', password: '', passwordConfirmation: ''}}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validationSchema={validationSchemaReg}>
        {({handleChange, handleSubmit, values, isSubmitting, errors}) => (
          <FormWrapper>
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
<<<<<<< HEAD
};
=======
};  
>>>>>>> qa2

export default InputSection;
