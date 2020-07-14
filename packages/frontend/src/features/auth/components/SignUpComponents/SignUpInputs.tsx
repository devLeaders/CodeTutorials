import React from "react";
import styled from "styled-components";
import { Field, Form } from "formik";
import { Fields, FieldsPlaceholders } from "../../enums";
import { Device } from "../../../common/styles/constans/Device";
import Input from "../../../common/components/form/Input";
import TitleForm from "../../../common/components/form/TitleForm";
import SubmitButton from "../../../common/components/form/SubmitButton";
import SignInRedirect from "./SignInRedirect";
const StyledForm = styled(Form)`
  width: 100%;
  min-height: 60vh;
  margin: 50px 0;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media ${Device.TABLET} {
    max-width: 600px;
    margin: 50px auto;
  }
`;
interface SignUpInputsInterface {
  errors: {
    password?: string;
    email?: string;
    passwordConfirmation?: string;
  };
}

const SignUpInputs: React.FC<SignUpInputsInterface> = ({ errors }) => {
  const { email, password, passwordConfirmation } = errors;
  return (
    <StyledForm>
      <TitleForm title='Rejestracja' />
      <Field
        label={Fields.EMAIL}
        name={Fields.EMAIL}
        component={Input}
        placeholder={FieldsPlaceholders.EMAIL}
        icon='img/email.svg'
        error={email}
      />
      <Field
        label={Fields.PASSWORD}
        name={Fields.PASSWORD}
        type={Fields.PASSWORD}
        component={Input}
        placeholder={FieldsPlaceholders.PASSWORD}
        icon='img/pass.svg'
        error={password}
      />
      <Field
        label={Fields.PASSWORD_CONFIRMATION}
        name={Fields.PASSWORD_CONFIRMATION}
        type={Fields.PASSWORD}
        component={Input}
        placeholder={FieldsPlaceholders.REPEAT_PASSWORD}
        icon='img/pass.svg'
        error={passwordConfirmation}
      />
      <SubmitButton title='Zarejestruj' />
      <SignInRedirect />
    </StyledForm>
  );
};
export default SignUpInputs;
