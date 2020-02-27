import * as React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';

import Header from '../components/SignUpScreen/Header';
import InputSection from '../components/SignUpScreen/InputSection';
import Footer from '../components/SignUpScreen/Footer';

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
`;
const Section = styled.View`
  margin-top: 30%;
  width: 90%;
`;

export interface SignUpScreenProps {}

const SignUpScreen: React.SFC<SignUpScreenProps> = () => {
  return (
    <Wrapper>
      <Section>
        <Header title="Zarejestruj się"></Header>
        <InputSection />
        <Footer />
      </Section>
    </Wrapper>
  );
};

export default SignUpScreen;
