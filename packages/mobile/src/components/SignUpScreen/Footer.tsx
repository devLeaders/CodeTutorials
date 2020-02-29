import * as React from 'react';
import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';

const Wrapper = styled.View`
  margin-top: 140px;
  align-self: center;
  flex-direction: row;
`;
const GotoSignInBtn = styled.View`
  margin-left: 10px;
`;
const GotoSignInTxt = styled.Text`
  font-size: 16px;
  color: purple;
`;
const Txt = styled.Text`
  font-size: 16px;
  color: black;
`;

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
  return (
    <Wrapper>
      <Txt>Masz konto?</Txt>
      <GotoSignInBtn>
        <GotoSignInTxt>Zaloguj się</GotoSignInTxt>
        <TouchableOpacity />
      </GotoSignInBtn>
    </Wrapper>
  );
};

export default Footer;
