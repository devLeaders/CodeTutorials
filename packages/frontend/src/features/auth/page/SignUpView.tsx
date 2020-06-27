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
import { RegValidationSchema } from "../action/validationSchema";
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
// UNCOMMENT videoActionController

const SignUpView: React.FC = (props: any) => {
  const history = useHistory();
  const signUpSubmit = async (value: any, action: any) => {
    console.log(value);
    try {
      const dataResponse = await Axios.post("/auth/signup", {
        email: `${value.Email}`,
        password: `${value.Password}`,
      });
      const created = dataResponse.data.created;
      history.push(NAVIGATION.LOGIN);
    } catch (err) {
      history.push(NAVIGATION.REGISTER);
    }
  };
  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      initialValues={{ email: "", password: "", passwordConfirmation: "" }}
      onSubmit={signUpSubmit}
      validationSchema={RegValidationSchema}>
      {(props: FormikProps<any>) => (
        <Form>
          <Wrapper>
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
          </Wrapper>
        </Form>
      )}
    </Formik>
  );
};
export default SignUpView;
