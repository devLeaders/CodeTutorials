import React, {PureComponent} from 'react';
import {View, Text } from 'react-native';
import styled from 'styled-components/native';
import Input from './Input';
import {
    Wrapper,
} from './SignInStyle';

import { 
    FormInput, 
    FormValidationMessage, 
    FormLabel,
} from 'react-native-elements';

export default class SignIn extends PureComponent {
    render(){
        return(
            <Wrapper>
                <FormLabel>Im a label</FormLabel>
                <FormInput />
                <FormValidationMessage>Error</FormValidationMessage>
            </Wrapper>
        )
    }
}


