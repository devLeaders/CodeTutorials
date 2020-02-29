import React, {PureComponent} from 'react';
import {View, Text } from 'react-native';
import styled from 'styled-components/native';
import LogIn from './LogIn';
import {
    Wrapper,
} from './SignInStyle';

export default class SignIn extends React.Component {
    render(){
        return(
            <Wrapper>
                <LogIn />
                
            </Wrapper>
        )
    }
}


