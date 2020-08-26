import React from 'react';
import {
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
    Text,
    AsyncStorage,
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
   onSubmit = (value) => {
       loginSubmit(value,()=>{this.props.navigation.navigate(NavigationName.MENU)})

   }
    render() {
        return (
            <SafeAreaView style={{ marginTop: 20}}>
                <Formik
                    initialValues={{ email: "", password: ''}}
                    onSubmit={this.onSubmit}
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