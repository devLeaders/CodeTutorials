import * as React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  marginLeft: 30px;
  margin-top: 100px;
  margin-bottom: 1px;
`;
const Title = styled.Text`
  font-size: 26px;
`;

export interface HeaderProps {
  title: string;
}

const SignInHeader: React<HeaderProps> = props => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
    </Wrapper>
  );
};

export default SignInHeader;