import React from "react";
import styled from "styled-components";
import { Formik, FormikProps } from "formik";
import { validationSchema } from "../action/validationSchema";
import { signUpSubmit } from "../action/signUpSubmit";
import SignUpInputs from "../components/SignUpComponents/SignUpInputs";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const SignUpView: React.FC = (props: any) => {
  return (
    <Wrapper>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{ email: "", password: "", passwordConfirmation: "" }}
        onSubmit={signUpSubmit}
        validationSchema={validationSchema}>
        {(props: FormikProps<any>) => <SignUpInputs {...props} />}
      </Formik>
    </Wrapper>
  );
};
export default SignUpView;
