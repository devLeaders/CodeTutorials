import React from "react";
import styled from "styled-components";
import { Field, Form, Formik, FormikProps } from "formik";
import TitleForm from "../components/loginComponents/TitleForm";
import StyledField from "../../common/components/form/StyledField";
import RecoveryPass from "../components/loginComponents/RecoveryPass";
import SubmitButton from "../components/loginComponents/SubmitButton";
import RegisterFields from "../components/loginComponents/RegisterFields";
import { Device } from "../../common/styles/constans/Device";
import { loginValidationSchema } from "../action/validationSchema";
import { Fields, FieldsPlaceholders } from "../enums";
import { signInSubmit } from "../action/signInSubmit";

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

const SignInView: React.FC = (props: any) => {
  return (
    <Wrapper>
      <Formik
        initialValues={{ email: "", password: "" }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={signInSubmit}
        validationSchema={loginValidationSchema}>
        {(props: FormikProps<any>) => (
          <Form>
            <StyledForm>
              <TitleForm title='Logowanie' />
              <Field
                label={Fields.EMAIL}
                name={Fields.EMAIL}
                placeholder={FieldsPlaceholders.EMAIL}
                component={StyledField}
                icon='img/email.svg'
                error={props.errors.email}
              />
              <Field
                label={Fields.PASSWORD}
                type={Fields.PASSWORD}
                name={Fields.PASSWORD}
                placeholder={FieldsPlaceholders.PASSWORD}
                component={StyledField}
                icon='img/pass.svg'
                error={props.errors.password}
              />
              <SubmitButton title='Zaloguj' />
              <RecoveryPass />
              <RegisterFields />
            </StyledForm>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SignInView;
