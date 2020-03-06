import React from 'react';
import {
    View, 
    TouchableOpacity, 
    Text,
    SafeAreaView,
    TextInput,
    Button,
    ActivityIndicator 
} from 'react-native';
import { Formik } from 'formik';
import {ForgotText, ForgotOpacity} from './SignInStyle';
import SignInBtn from './SignInBtn';
import validationSchema from './validationSchema';
import StyledInput from './StyledInput';

export interface LogInProps {
    label: string;
    formikProps: any;
    formikKey: string;
  }

class LogIn extends React.Component<LogInProps> {
    render() {
        return (
            <SafeAreaView style={{ marginTop: 90}}>
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
                                placeholder="E-mail"
                                autofocus
                            />

                            <StyledInput
                                label="Password"
                                formikProps={formikProps}
                                formikKey="password"
                                placeholder="Password"
                                secureTextEntry
                            />

                            <ForgotOpacity>
                                 <ForgotText>Forgot Password?</ForgotText>
                            </ForgotOpacity>

                            {formikProps.isSubmitting ? (
                            <ActivityIndicator />
                            ) : (
                            ///<Button 
                            ///    title="Subimit" onPress={formikProps.handleSubmit} />
                            <SignInBtn onPress={formikProps.handleSubmit} />
                            )}
                            
                        </React.Fragment>
                    )}
                </Formik>
            </SafeAreaView>
        )
    }
}

export default LogIn;