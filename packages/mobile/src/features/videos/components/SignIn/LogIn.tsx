import React from 'react';
import {
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
    Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Formik } from 'formik';
import validationSchema from '../SignIn/validationSchema';
import SignInInput from './SignInInput';
import styled from 'styled-components/native';
import {FontSize} from '../../../common/styles/constans/FontSize';
import {Color} from '../../../common/styles/constans/Color';
import {signIn} from '@project/common/features/auth/connectors';
//import {AsyncStorage} from 'react-native';

import { NavigationName } from '../../../../config/routing/NavigationName';


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

const ForgotText = styled.Text({
    marginBottom: 10, 
    marginTop: 10,
    color: Color.LIGHT_PURPLE,
    fontSize: FontSize.MIDPLUS,
    marginRight: 30,
  });
  
const ForgotOpacity = styled.TouchableOpacity({
    alignItems: 'flex-end',
  });
  
export interface LogInProps {
    // label: string;
    // formikProps: any;
    // formikKey: string;
    navigation: any;
  }

  
 

class LogIn extends React.Component<LogInProps> {
    loginSubmit = async (value: any, action: any) => {
        console.log(value);

        const dataResponse = await signIn({
                                email:value.email,
                                password:value.password
                            });

        const token = dataResponse.data.token;
        AsyncStorage.setItem('token', token);

        //Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
        //zabezpieczyc wywolanie po nieodpowiednim statusie, 
         this.props.navigation.navigate(NavigationName.MOVIELIST);
    }

    render() {
        return (
            <SafeAreaView style={{ marginTop: 20}}>
                <Formik
                    initialValues={{ email: "", password: ''}}
                    onSubmit={this.loginSubmit}
                    validationSchema={validationSchema}
                >
                    {formikProps => (
                        <React.Fragment>
                            <SignInInput
                                label="Email"
                                formikProps={formikProps}
                                formikKey="email"
                                src='email'
                                placeholder="E-mail"
                                autofocus
                            />

                            <SignInInput
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
                            
                            )}
                            
                        </React.Fragment>
                    )}
                </Formik>
            </SafeAreaView>
        )
    }
}

export default LogIn;