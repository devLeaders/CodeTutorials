import React from 'react';
import styled from 'styled-components/native';
import LogIn from './LogIn';
import {
    SignUpOpacity,
    SignUpText,
} from './SignInStyle';
import {Color} from '../../variables/Color';
import SignInHeader from './SignInHeader';
import AnotherSingInMethods from './AnotherSingInMethods';

const Wrapper = styled.ScrollView({
    flexDirection: 'column',
    flex: 1,  
    backgroundColor: Color.WHITE,
  
  });

const OrText = styled.Text`
    alignSelf: center;
    color: grey;
    `;

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        headerShown: false,
    };
    render(){
        return(
            <Wrapper>
                <SignInHeader title={"Sign In"} />
                <LogIn />
                <SignUpOpacity>
                    <SignUpText>Don't have an account?</SignUpText>
                    
                </SignUpOpacity>
                <OrText>———OR———</OrText>
                <AnotherSingInMethods 
                    src1='facebook'
                    src2='google'
                    src3='twitter'
                /> 
            </Wrapper>
        )
    }
}


