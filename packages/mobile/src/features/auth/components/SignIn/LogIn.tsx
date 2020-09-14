import React, { useCallback, useContext } from 'react';
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
import loginSubmit from '../../action/singInSubmit';
import { NavigationName } from '../../../../config/routing/NavigationName';
import { NotyficationContext } from '../../../../features/notifications/NotificationsStore';


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

const LogIn = (props:LogInProps) => {
    const { state } = useContext(NotyficationContext)

  const onSubmit = useCallback((value) => {
       loginSubmit(value, state.token, ()=>{props.navigation.navigate(NavigationName.MENU)})
   }, [])
    return (
            <SafeAreaView style={{ marginTop: 20}}>
                <Formik
                    initialValues={{ email: "", password: ''}}
                    onSubmit={onSubmit}
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

export default LogIn;