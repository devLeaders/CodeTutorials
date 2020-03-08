import React from 'react';
import {
    SafeAreaView,
    ActivityIndicator 
} from 'react-native';
import { Formik } from 'formik';
import {ForgotText, ForgotOpacity} from './SignInStyle';
import validationSchema from './validationSchema';
import StyledInput from './StyledInput';
import styled from 'styled-components';

export interface LogInProps {
    label: string;
    formikProps: any;
    formikKey: string;
  }

  const Btn = styled.TouchableOpacity`
  align-self: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #9F8DF0;;
  border-radius: 40px;
  width: 80%;
  margin-top: 15px;
`;

const SignInTxt = styled.Text`
  font-size: 18px;
  color: white;
`;

const Img = styled.Image`
  position: absolute;
  right: 5%;
  height: 30px;
  width: 34px;
`;

class LogIn extends React.Component<LogInProps> {
    render() {
        return (
            <SafeAreaView style={{ marginTop: 20}}>
                <Formik
                    initialValues={{ email: "", password: ''}}
                    onSubmit={(values, actions) => { //add handleSubmit(values, actions)
                        alert(JSON.stringify(values));
                        setTimeout(() => {
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                    validationSchema={validationSchema}
                >
                    {formikProps => (
                        <React.Fragment>
                            <StyledInput
                                label="Email"
                                formikProps={formikProps}
                                formikKey="email"
                                src='email'
                                placeholder="E-mail"
                                autofocus
                            />

                            <StyledInput
                                label="Password"
                                formikProps={formikProps}
                                formikKey="password"
                                placeholder="Password"
                                secureTextEntry
                                src='password'
                            />

                            <ForgotOpacity>
                                 <ForgotText>Forgot Password?</ForgotText>
                            </ForgotOpacity>

                            {formikProps.isSubmitting ? (
                            <ActivityIndicator />
                            ) : (
                                
                            <Btn onPress={formikProps.handleSubmit}>
                                <SignInTxt>Zaloguj się</SignInTxt>
                                <Img source={{uri: 'arrow'}} />
                            </Btn>
                            //<SignInBtn onPress={formikProps.handleSubmit} />
                            )}
                            
                        </React.Fragment>
                    )}
                </Formik>
            </SafeAreaView>
        )
    }
}

export default LogIn;