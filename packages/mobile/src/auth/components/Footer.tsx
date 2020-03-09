import * as React from 'react';
import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontSize} from '../../variables/FontSize';
import {Color} from '../../variables/Color';

const Wrapper = styled.View`
  margin-top: 20px;
  align-self: center;
  flex-direction: row;
`;
const GotoSignInBtn = styled.View`
  margin-left: 10px;
`;
const GotoSignInTxt = styled.Text`
  font-size: ${FontSize.MEDIUM};
  color: ${Color.PURPLE};
`;
const Txt = styled.Text`
  font-size: ${FontSize.MEDIUM};
  color: ${Color.BLACK};
`;

const Footer: React.SFC = () => {
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
