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
import { loginValidationSchema } from "../action/validationSchema";
import { Fields, FieldsPlaceholders } from "../enums";

const Wrapper = styled.div`
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
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={signInSubmit}
      validationSchema={loginValidationSchema}>
      {(props: FormikProps<any>) => (
        <Form>
          <Wrapper>
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
              name='password'
              placeholder={FieldsPlaceholders.PASSWORD}
              component={StyledField}
              icon='img/pass.svg'
              error={props.errors.password}
            />

            <SubmitButton title='Zaloguj' />
            <RecoveryPass />
            <RegisterFields />
          </Wrapper>
        </Form>
      )}
    </Formik>
  );
};

export default SignInView;
