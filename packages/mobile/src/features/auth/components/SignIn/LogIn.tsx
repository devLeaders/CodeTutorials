import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import { Formik } from 'formik';
import validationSchema from '../../action/validationSchema';
import SignInInput from './SignInInput';
import styled from 'styled-components/native';
import {FontSize} from '../../../common/styles/constans/FontSize';
import {Color} from '../../../common/styles/constans/Color';
import loginSubmit from '../../action/singInSubmit';
import { NavigationName } from '../../../../config/routing/NavigationName';
import { NotyficationContext } from '../../../../features/notifications/NotificationsStore';
import { MyText } from '../../../../features/common/styles/MyText';
import { FontWeight } from '../../../../features/common/styles/constans/FontWeight';


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

const ErrorView = styled.View({
    backgroundColor: Color.RED,
    alignItems: 'center',
    marginTop: 10,
    
})

const ErrorMsg = styled(MyText)({
    color: Color.WHITE,
    fontSize: FontSize.MIDIUM,
    fontWeight: parseInt(FontWeight.BOLD, 10),
})
  
export interface LogInProps {
    navigation: any;
  }

const LogIn = (props:LogInProps) => {
    const { state } = useContext(NotyficationContext)
    const [loading, setLoading] = useState(false);
    const [ serverError, setServerError ] = useState('')

    const onSubmit = useCallback((value) => {
       setLoading(true)
       loginSubmit(value, state.token, (error)=>{
            setLoading(false)
            if(error){
                setServerError(error)
            }else {
                props.navigation.navigate(NavigationName.MENU)
            }
           
        })
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
                                autocomplite
                                keyboardType={"email-address"}
                                textContentType={"emailAddress"}
                                autoCapitalize = 'none'
                            />

                            <SignInInput
                                label="Password"
                                formikProps={formikProps}
                                formikKey="password"
                                placeholder="Password"
                                secureTextEntry
                                autoCapitalize = 'none'
                                src='password'
                            />
                            {(serverError.length != 0) && 
                                <ErrorView> 
                                    <ErrorMsg>{serverError}</ErrorMsg>
                                </ErrorView>
                            }
                            <ForgotOpacity>
                                 <ForgotText>Zapomniałeś hasła?</ForgotText>
                            </ForgotOpacity>
                          
                            {loading ? (
                                <ActivityIndicator />
                            ) : (
                            <View style={{alignItems:'center'}}>
                                <Btn onPress={formikProps.handleSubmit}>
                                    <WrapTextImg>
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