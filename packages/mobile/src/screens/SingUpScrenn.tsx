import * as React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';

import Header from '../components/SignUpScreen/Header';

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  background-color: green;
  align-items: center;
`;
const Section = styled.View`
  margin-top: 30%;
  width: 90%;
  background-color: yellow;
`;

export interface SignUpScreenProps {}

const SignUpScreen: React.SFC<SignUpScreenProps> = () => {
  return (
    <Wrapper>
      <Section>
        <Header title="Sign Up"></Header>
      </Section>
    </Wrapper>
  );
};

export default SignUpScreen;
