import React from 'react';
import { View, Text, SafeAreaView, TextInput, Button, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as yup from "yup";
import {EmailView, EmailText} from './SignInStyle';

const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {

    const inputStyles = {
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            marginBottom: 3,
    };

    if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
        inputStyles.borderColor = "red";
    }
return (
    <EmailView>
        <EmailText>{ label }</EmailText>
        <TextInput
            style={inputStyles}
            onChangeText={formikProps.handleChange(formikKey)}
            onBlur={formikProps.handleBlur(formikKey)}
            {...rest}
        />
        <Text style={{ color: 'red' }}>
            {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
        </Text>
    </EmailView>
);
}

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