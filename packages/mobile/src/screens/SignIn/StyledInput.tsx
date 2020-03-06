import React from 'react';
import {
    Text,
    TextInput,
} from 'react-native';
import {EmailView, EmailText} from './SignInStyle';

const inputStyles = {
    borderWidth: 1,
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderBottomColor: "#CFCFCF",
    padding: 10,
    marginBottom: 3,
    fontSize: 20,
};

const StyledInput = ({ label, formikProps, formikKey, ...rest }) => {

    if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
        inputStyles.borderBottomColor = "red";
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

export default StyledInput;