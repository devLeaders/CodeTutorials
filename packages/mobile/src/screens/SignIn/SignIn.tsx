import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import LogIn from './LogIn';
import {
    Wrapper,
    SignUpOpacity,
    SignUpText,
} from './SignInStyle';

import SignInHeader from './SignInHeader';

export default class SignIn extends React.Component {
    render(){
        return(
            <Wrapper>
                <SignInHeader title={"Zaloguj Się"} />
                <LogIn />
                <SignUpOpacity>
                    <SignUpText>Don't have an account?</SignUpText>
                </SignUpOpacity>
              
                
            </Wrapper>
        )
    }
}


