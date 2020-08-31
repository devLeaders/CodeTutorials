import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { signInSubmit } from "../action/signInSubmit";
import SignInInputs from "../components/SignInComponents/SignInInputs";
import SignUpRedirect from "../components/SignInComponents/SignUpRedirect";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;
interface FormValuesInterface {
  email: string;
  password: string;
}

const SignInView: React.FC<{}> = () => {
  const initialValues: FormValuesInterface = { email: "", password: "" };
  return (
    <Wrapper>
      <Formik initialValues={initialValues} validateOnChange={false} validateOnBlur={false} onSubmit={signInSubmit}>
        {(props: { errors: string }) => <SignInInputs {...props} />}
      </Formik>
      <SignUpRedirect />
    </Wrapper>
  );
};

export default SignInView;
