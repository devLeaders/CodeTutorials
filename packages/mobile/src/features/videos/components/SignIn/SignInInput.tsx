import React from 'react';
import {
    Text,
    TextInput,
} from 'react-native';
//import {EmailView, EmailText} from './SignInStyle';
import styled from 'styled-components/native';

const Wrapper = styled.View``;

const InputView = styled.View`
    border-bottom-color: #CFCFCF;
    border-bottom-width: 1px;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    marginHorizontal: 30px;
   
  `;
 
const EmailText = styled.Text`
    margin-bottom: 3px;
    marginHorizontal: 10px;
  `;

const Img = styled.Image`
    width: 25px;
    height: 25px;
`;

const TxtInput = styled.TextInput`
  padding: 15px 0;
  width: 90%;
`;

// dodac interfejs 

const SignInInput = ({ label, formikProps, formikKey, src, ...rest }) => {

    const inputStyles = {
        borderWidth: 1,
        borderTopColor: "white",
        borderLeftColor: "white",
        borderRightColor: "white",
        borderBottomColor: 'transparent',
        padding: 10,
        marginBottom: 3,
        fontSize: 20,
    };

    if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
        inputStyles.borderBottomColor = "transparent";
    }

return (
    <Wrapper>
    <InputView>
        <Img source={{uri: src}} />
        <TxtInput
            style={inputStyles}
            onChangeText={formikProps.handleChange(formikKey)}
            onBlur={formikProps.handleBlur(formikKey)}
            {...rest}
        />
        <Text style={{ color: 'orange' }}>
            {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
        </Text>
        </InputView>
    </Wrapper>
);
}

export default SignInInput;