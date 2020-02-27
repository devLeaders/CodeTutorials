import * as React from 'react';
import styled from 'styled-components';
import {View, Text} from 'react-native';

const Wrapper = styled.View``;
const ErrorTxt = styled.Text`
  color: red;
`;

export interface ErrorProps {
  error: any;
}

const Error: React.SFC<ErrorProps> = ({error}) => {
  return (
    <Wrapper>
      <ErrorTxt>{error}</ErrorTxt>
    </Wrapper>
  );
};

export default Error;
