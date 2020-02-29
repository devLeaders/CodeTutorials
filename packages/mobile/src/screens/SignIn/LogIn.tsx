import React from 'react';
import { View, Text, SafeAreaView, TextInput, Button, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';


class LogIn extends React.Component {
    state = {};
    render() {
        return (
            <SafeAreaView style={{ marginTop: 90}}>
                <Formik>
                    {formikProps => (
                        <React.Fragment>
                            <TextInput />
                            <Button title="Subimit" />
                        </React.Fragment>
                    )}
                </Formik>
            </SafeAreaView>
        )
    }
}

export default LogIn;