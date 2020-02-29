import * as React from 'react';
import styled from 'styled-components/native';
import {View, Text, ScrollView} from 'react-native';

import Header from '../components/SignUpScreen/Header';
import InputSection from '../components/SignUpScreen/InputSection';
import Footer from '../components/SignUpScreen/Footer';

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
`;
const Section = styled.View`
  margin-top: 120px;
  width: 80%;
`;

export interface SignUpScreenProps {}

const SignUpScreen: React.SFC<SignUpScreenProps> = () => {
  return (
    <ScrollView>
      <Wrapper>
        <Section>
          <Header title="Zarejestruj się"></Header>
          <InputSection />
        </Section>
        <Footer />
      </Wrapper>
    </ScrollView>
  );
};

export default SignUpScreen;
