import * as React from 'react';
import styled from 'styled-components';
import {View, TextInput, Image} from 'react-native';
import Error from './Error';
import {ErrorMessage} from 'formik';

const Wrapper = styled.View``;
const InputWrapper = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 2;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TxtInput = styled.TextInput`
  padding: 15px 0;
  width: 90%;
`;
const Img = styled.Image`
  width: 25px;
  height: 25px;
`;
const ErrorTxt = styled.Text`
  color: red;
`;

export interface FormikInputProps {
  type: string;
  src: string;
  change: any;
  value: any;
  holder: string;
}

const FormikInput: React.SFC<FormikInputProps> = props => {
  const {type, src, change, holder, errors} = props;
  return (
    <Wrapper>
      <InputWrapper>
        <Img source={{uri: src}} />
        <TxtInput
          placeholder={holder}
          onChangeText={change}
          secureTextEntry={type === 'password'}
        />
      </InputWrapper>
    </Wrapper>
  );
};

export default FormikInput;
