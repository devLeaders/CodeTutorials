import React from 'react';
import { View, Text, SafeAreaView, TextInput, Button, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as yup from "yup";
import {EmailView, EmailText} from './SignInStyle';


const validationSchema = yup.object().shape({
    email: yup
    .string()
    .label('Email')
    .email()
    .required(),
    password: yup
    .string()
    .label("Password")
    .required().min(8, 'Password is to short min 8 characters')
    .max(20, 'Password should have max 20 characters')
});

class LogIn extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ marginTop: 90}}>
                <Formik
                    initialValues={{ email: "", password: ''}}
                    onSubmit={(values, actions) => {
                        alert(JSON.stringify(values));
                        setTimeout(() => {
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                    validationSchema={validationSchema}
                >
                    {formikProps => (
                        <React.Fragment>
                            <EmailView>
                                <EmailText>Email</EmailText>
                                <TextInput
                                placeholder="E-mail"
                                    style={{
                                        borderWidth: 1,
                                        borderColor: "black",
                                        padding: 10,
                                        marginBottom: 3,
                                    }}
                                    onChangeText={formikProps.handleChange("email")}
                                    onBlur={formikProps.handleBlur("email")}
                                    autoFocus
                                />
                                <Text style={{ color: 'red' }}>{formikProps.touched.email && formikProps.errors.email}</Text>

                            </EmailView>
                            
                            <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                            <Text style={{marginBottom: 3}}>Password</Text>
                            <TextInput
                            placeholder="Password"
                                style={{
                                    borderWidth: 1,
                                    borderColor: "black",
                                    padding: 10,
                                    marginBottom: 3,
                                }}
                                onChangeText={formikProps.handleChange("password")}
                                onBlur={formikProps.handleBlur("password")}
                                secureTextEntry
                            />
                            <Text style={{ color: 'red' }}>{formikProps.touched.password && formikProps.errors.password}</Text>

                        </View>


                            {formikProps.isSubmitting ? (
                            <ActivityIndicator />
                            ) : (
                            <Button title="Subimit" onPress={formikProps.handleSubmit} />
                            )}
                        </React.Fragment>
                    )}
                </Formik>
            </SafeAreaView>
        )
    }
}

export default LogIn;