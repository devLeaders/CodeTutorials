import React , {useCallback} from 'react';
import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontSize} from '../../common/styles/constans/FontSize';
import {Color} from '../../common/styles/constans/Color';
import { NavigationName } from 'src/config/routing/NavigationName';
import { useNavigation } from '@react-navigation/native';

const Wrapper = styled.View`
  margin-top: 20px;
  align-self: center;
  flex-direction: row;
`;
const GotoSignInBtn = styled.TouchableOpacity`
  margin-left: 10px;
`;
const GotoSignInTxt = styled.Text`
  font-size: ${FontSize.MIDIUM};
  color: ${Color.PURPLE};
`;
const Txt = styled.Text`
  font-size: ${FontSize.MIDIUM};
  color: ${Color.BLACK};
`;

const Footer: React.SFC = () => {

  const navigation = useNavigation();
  const navBack = useCallback(() => {navigation.goBack()},[])

  return (
    <Wrapper>
      <Txt>Masz konto?</Txt>
      <GotoSignInBtn >
        <GotoSignInTxt onPress={navBack}>Zaloguj się</GotoSignInTxt>
        <TouchableOpacity />
      </GotoSignInBtn>
    </Wrapper>
  );
};

export default Footer;
