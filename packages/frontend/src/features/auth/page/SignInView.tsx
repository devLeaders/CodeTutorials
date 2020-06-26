import React from "react";
import styled from "styled-components";
import { Field, Form, Formik, FormikProps } from "formik";
import Axios from "../../../config/axios/configAxios";
import TitleForm from "../components/loginComponents/TitleForm";
import StyledField from "../../common/components/form/StyledField";
import RecoveryPass from "../components/loginComponents/RecoveryPass";
import SubmitButton from "../components/loginComponents/SubmitButton";
import RegisterFields from "../components/loginComponents/RegisterFields";
import { useHistory } from "react-router-dom";
import NAVIGATION from "../../../config/routing/NavigationPath";
import { Device } from "../../common/styles/constans/Device";

const LoginForm = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media ${Device.TABLET} {
    max-width: 600px;
    margin: 100px auto 0 auto;
  }
`;

const SignInView: React.FC = (props: any) => {
  const history = useHistory();

  const signInSubmit = async (value: any, action: any) => {
    try {
      const dataResponse = await Axios.post("/auth/signin", {
        email: `${value.lastName}`,
        password: `${value.pass}`,
      });

      const token = dataResponse.data.token;
      localStorage.setItem("token", token);
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      history.push(NAVIGATION.MOVIES);
    } catch (err) {
      history.push(NAVIGATION.LOGIN);
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={signInSubmit}>
      {(props: FormikProps<any>) => (
        <Form>
          <LoginForm>
            <TitleForm title='Logowanie' />
            <Field
              name='email'
              placeholder='Email'
              component={StyledField}
              icon='img/email.svg'
            />
            <Field
              name='password'
              placeholder='Hasło'
              component={StyledField}
              icon='img/pass.svg'
            />
            <SubmitButton title='Zaloguj' />
            <RecoveryPass />
            <RegisterFields />
          </LoginForm>
        </Form>
      )}
    </Formik>
  );
};

export default SignInView;
