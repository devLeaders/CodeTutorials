import * as React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';

const Wrapper = styled.View``;
const ErrorTxt = styled.Text`
  color: red;
`;

export interface ErrorProps {
  inputError: any;
}

const Error: React.SFC<ErrorProps> = ({inputError}) => {
  return (
    <Wrapper>
      <ErrorTxt>{inputError}</ErrorTxt>
    </Wrapper>
  );
};

export default Error;
