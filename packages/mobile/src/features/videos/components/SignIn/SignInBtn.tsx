import * as React from 'react';
import styled from 'styled-components';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const Btn = styled.View`
  align-self: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #9F8DF0;;
  border-radius: 40px;
  width: 80%;
  margin-top: 15px;
`;

const Img = styled.Image`
  position: absolute;
  right: 5%;
  height: 30px;
  width: 34px;
`;

const SignInTxt = styled.Text`
  font-size: 18px;
  color: white;
`;

export interface SignInBtnProps {
  handleSubmit: any;
}

const SignInBtn: React.SFC<SignInBtnProps> = props => {
  return (
    <TouchableOpacity onPress={props.handleSubmit}>
      <Btn>
        <SignInTxt>Zaloguj się</SignInTxt>
        <Img source={{uri: 'arrow'}} />
      </Btn>
    </TouchableOpacity>
  );
};

export default SignInBtn;