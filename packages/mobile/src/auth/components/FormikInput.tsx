import * as React from 'react';
import styled from 'styled-components/native';
import {View, TextInput, Image} from 'react-native';

import Error from './Error';
import {ErrorMessage} from 'formik';

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
  type: {EMAIL: string; PASSWORD: string};
  src: string;
  change(text: string): void;
  value: string;
  holder: string;
  inputError: string | undefined;
  onSubmitEditing?: any;
  returnKeyType?: any;
}

const FormikInput: React.SFC<FormikInputProps> = props => {
  const {type, src, change, holder, value, inputError, returnKeyType} = props;
  return (
    <View>
      <InputWrapper>
        <Img source={{uri: src}} />
        <TxtInput
          placeholder={holder}
          onChangeText={change}
          secureTextEntry={type.PASSWORD === 'password'}
          value={value}
          returnKeyType={returnKeyType}
        />
      </InputWrapper>
      {inputError && <Error inputError={inputError} />}
    </View>
  );
};

export default FormikInput;
