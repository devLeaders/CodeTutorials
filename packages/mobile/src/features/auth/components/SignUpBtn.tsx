import * as React from 'react';
import styled from 'styled-components/native';
import {View, Text, TouchableOpacity, Image} from 'react-native';

<<<<<<< HEAD:packages/mobile/src/features/auth/components/SignUpBtn.tsx
import {FontSize} from '../../common/styles/constans/FontSize';
import {Color} from '../../common/styles/constans/Color';
=======
import {FontSize} from '../../../common/styles/constans/FontSize';
import {Color} from '../../../common/styles/constans/Color';
>>>>>>> qa2:packages/mobile/src/features/auth/components/SingUp/SignUpBtn.tsx

const Btn = styled.View`
  align-self: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${Color.PURPLE};
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

const SignUpTxt = styled.Text`
  font-size: ${FontSize.MIDPLUS};
  color: white;
`;

export interface SignUpBtnProps {
  handleSubmit(): void;
}

const SignUpBtn: React.SFC<SignUpBtnProps> = props => {
  return (
    <TouchableOpacity onPress={props.handleSubmit}>
      <Btn>
        <SignUpTxt>Zarejestruj się</SignUpTxt>
        <Img source={{uri: 'arrow'}} />
      </Btn>
    </TouchableOpacity>
  );
};

export default SignUpBtn;
