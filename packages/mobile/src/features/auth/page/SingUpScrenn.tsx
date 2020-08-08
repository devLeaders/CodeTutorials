import * as React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import Header from '../../common/components/Header';
import InputSection from '../components/SingUp/InputSection';
import Footer from '../components/Footer';
import { Color } from '../../../features/common/styles/constans/Color';

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const Section = styled.View`
  width: 80%;
`;

class SignUpScreen extends React.Component<any> {
  render(){
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', backgroundColor:Color.WHITE}}>
        <Wrapper>
          <Section>
            <Header title="Zarejestruj się"></Header>
            <InputSection />
          </Section>
          <Footer />
        </Wrapper>
      </ScrollView>
    );
  }
};

export default SignUpScreen
