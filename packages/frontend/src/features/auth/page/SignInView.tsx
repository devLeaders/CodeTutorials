import React from "react";
import styled from "styled-components";
import { Formik, FormikProps } from "formik";
import { signInSubmit } from "../action/signInSubmit";
import SignInInputs from "../components/SignInComponents/SignInInputs";
const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const SignInView: React.FC = (props: any) => {
  return (
    <Wrapper>
      <Formik
        initialValues={{ email: "", password: "" }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={signInSubmit}>
        {(props: FormikProps<any>) => <SignInInputs {...props} />}
      </Formik>
    </Wrapper>
  );
};

export default SignInView;
