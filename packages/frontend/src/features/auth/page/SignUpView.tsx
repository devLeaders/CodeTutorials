import React from "react";
import styled from "styled-components";
import { Field, Form, Formik, FormikProps } from "formik";
import Axios from "../../../config/axios/configAxios";
import { useHistory } from "react-router-dom";
import NAVIGATION from "../../../config/routing/NavigationPath";
import TitleForm from "../components/loginComponents/TitleForm";
import StyledField from "../../common/components/form/StyledField";
import { Device } from "../../common/styles/constans/Device";
import SubmitButton from "../components/loginComponents/SubmitButton";
import LoginFields from "../components/loginComponents/LoginFields";

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
// UNCOMMENT videoActionControllet

const SignUpView: React.FC = (props: any) => {
  const history = useHistory();
  const signUpSubmit = async (value: any, action: any) => {
    try {
      const dataResponse = await Axios.post("/auth/signup", {
        username: `${value.username}`,
        email: `${value.lastName}`,
        password: `${value.pass}`,
      });
      const created = dataResponse.data.created;
      history.push(NAVIGATION.LOGIN);
    } catch (err) {
      history.push(NAVIGATION.REGISTER);
    }
  };
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      onSubmit={signUpSubmit}>
      {(props: FormikProps<any>) => (
        <Form>
          <LoginForm>
            <TitleForm title='Rejestracja' />
            <Field
              name='username'
              type='text'
              component={StyledField}
              placeholder='Nazwa użytkownika'
              icon='img/user.svg'
            />
            <Field
              name='email'
              type='email'
              component={StyledField}
              placeholder='Email'
              icon='img/email.svg'
            />
            <Field
              name='password'
              type='password'
              component={StyledField}
              placeholder='Hasło'
              icon='img/pass.svg'
            />
            <SubmitButton title='Zarejestruj' />
            <LoginFields />
          </LoginForm>
        </Form>
      )}
    </Formik>
  );
};
export default SignUpView;
