import React from "react";
import styled from "styled-components";
import { Field, Form } from "formik";
import { Device } from "../../../common/styles/constans/Device";
import { Fields, FieldsPlaceholders } from "../../enums";
import Input from "../../../common/components/form/Input";
import RecoveryPass from "./RecoveryPass";
import SubmitButton from "../../../common/components/form/SubmitButton";
import TitleForm from "../../../common/components/form/TitleForm";
const StyledForm = styled(Form)`
  width: 100%;
  margin: 50px 0 0 0;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media ${Device.TABLET} {
    max-width: 600px;
    margin: 50px auto 0 auto;
  }
`;
interface SignInInputsInterface {
  errors: {
    password?: string;
    email?: string;
  };
}

const SignInInputs: React.FC<SignInInputsInterface> = ({ errors }) => {
  const { email, password } = errors;
  return (
    <>
      <StyledForm>
        <TitleForm title='Logowanie' />
        <Field
          label={Fields.EMAIL}
          name={Fields.EMAIL}
          placeholder={FieldsPlaceholders.EMAIL}
          component={Input}
          icon='img/email.svg'
          error={email}
        />
        <Field
          label={Fields.PASSWORD}
          type={Fields.PASSWORD}
          name={Fields.PASSWORD}
          placeholder={FieldsPlaceholders.PASSWORD}
          component={Input}
          icon='img/pass.svg'
          error={password}
        />
        <SubmitButton title='Zaloguj' />
        <RecoveryPass />
      </StyledForm>
    </>
  );
};
export default SignInInputs;
