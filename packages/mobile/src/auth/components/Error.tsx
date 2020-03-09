import * as React from 'react';
import styled from 'styled-components/native';
import {View, Text} from 'react-native';

const ErrorTxt = styled.Text`
  color: red;
`;

export interface ErrorProps {
  inputError: string | undefined;
}

const Error: React.SFC<ErrorProps> = ({inputError}) => {
  return (
    <View>
      <ErrorTxt>{inputError}</ErrorTxt>
    </View>
  );
};

export default Error;
