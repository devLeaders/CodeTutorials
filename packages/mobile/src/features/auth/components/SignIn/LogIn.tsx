import React from 'react';
import {
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Formik } from 'formik';
import validationSchema from '../../action/validationSchema';
import SignInInput from './SignInInput';
import styled from 'styled-components/native';
import {FontSize} from '../../../common/styles/constans/FontSize';
import {Color} from '../../../common/styles/constans/Color';
//import {AsyncStorage} from 'react-native';

import { NavigationName } from '../../../../config/routing/NavigationName';


const Btn = styled.TouchableOpacity`

  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${Color.DARKGREY};
  border-radius: 40px;
  margin-top: 15px;
  width:250px
`;

const SignInTxt = styled.Text`
  font-size: 18px;
  color: white;
  margin-right: 10px
`;

const Img = styled.Image`
  height: 30px;
  width: 34px;
  right: 0;
`;

const ForgotText = styled.Text({
    marginBottom: 10, 
    marginTop: 10,
    color: Color.DARKGREY,
    fontSize: FontSize.MIDPLUS,
    marginRight: 30,
  });
  
const ForgotOpacity = styled.TouchableOpacity({
    alignItems: 'flex-end',
  });

const WrapTextImg = styled.View({
    flexDirection:'row',
    justifyContent:'center', 
    alignItems:'center'
})
  
export interface LogInProps {
    navigation: any;
  }

class LogIn extends React.Component<LogInProps> {
    loginSubmit = async (value: any, action: any) => {
        // const dataResponse = await Axios.post('/auth/signin', {
        //     "email": `${value.email}`,
        //     "password": `${value.password}`
        //      })
            // const token = dataResponse.data.token;
            // AsyncStorage.setItem('token', token);

            //Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
            //zabezpieczyc wywolanie po nieodpowiednim statusie, 
            this.props.navigation.navigate(NavigationName.MENU);
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
                                 <ForgotText>Zapomniałeś hasła?</ForgotText>
                            </ForgotOpacity>

                            {formikProps.isSubmitting ? (
                            <ActivityIndicator />
                            ) : (
                               
                            <View style={{alignItems:'center'}}>
                                <Btn onPress={formikProps.handleSubmit}>
                                    <WrapTextImg >
                                        <SignInTxt>Zaloguj się</SignInTxt>
                                        <Img source={{uri: 'arrow'}} />
                                    </WrapTextImg>
                                </Btn>
                            </View>
                            
                            )}
                            
                        </React.Fragment>
                    )}
                </Formik>
            </SafeAreaView>
        )
    }
}

export default LogIn;