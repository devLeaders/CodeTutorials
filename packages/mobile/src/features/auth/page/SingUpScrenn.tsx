import * as React from 'react';
import styled from 'styled-components/native';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../common/components/Header';
import InputSection from '../components/InputSection';
import Footer from '../components/Footer';

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const Section = styled.View`
  width: 80%;
`;

const SignUpScreen: React.SFC = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
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
