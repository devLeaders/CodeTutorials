import React from "react";
import styled from "styled-components";
import { Field, Form, Formik, FormikProps } from "formik";
import TitleForm from "../components/loginComponents/TitleForm";
import StyledField from "../../common/components/form/StyledField";
import { Device } from "../../common/styles/constans/Device";
import SubmitButton from "../components/loginComponents/SubmitButton";
import LoginFields from "../components/loginComponents/LoginFields";
import { RegValidationSchema } from "../action/validationSchema";
import { Fields, FieldsPlaceholders } from "../enums";
import { signUpSubmit } from "../action/signUpSubmit";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;
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

const SignUpView: React.FC = (props: any) => {
  return (
    <Wrapper>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{ email: "", password: "", passwordConfirmation: "" }}
        onSubmit={signUpSubmit}
        validationSchema={RegValidationSchema}>
        {(props: FormikProps<any>) => (
          <StyledForm>
            <TitleForm title='Rejestracja' />
            <Field
              label={Fields.EMAIL}
              name={Fields.EMAIL}
              component={StyledField}
              placeholder={FieldsPlaceholders.EMAIL}
              icon='img/email.svg'
              error={props.errors.email}
            />
            <Field
              label={Fields.PASSWORD}
              name={Fields.PASSWORD}
              type={Fields.PASSWORD}
              component={StyledField}
              placeholder={FieldsPlaceholders.PASSWORD}
              icon='img/pass.svg'
              error={props.errors.password}
            />
            <Field
              label={Fields.PASSWORD_CONFIRMATION}
              name={Fields.PASSWORD_CONFIRMATION}
              type={Fields.PASSWORD}
              component={StyledField}
              placeholder={FieldsPlaceholders.REPEAT_PASSWORD}
              icon='img/pass.svg'
              error={props.errors.passwordConfirmation}
            />
            <SubmitButton title='Zarejestruj' />
            <LoginFields />
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};
export default SignUpView;
