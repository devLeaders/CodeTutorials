import * as React from 'react';
import styled from 'styled-components/native';
import {View, TextInput, Image} from 'react-native';

import Error from './Error';
import {ErrorMessage} from 'formik';
import {InputTypes} from '../types/InputTypes';
import {returnKyeType} from '../types/types';
import { Color } from '../styles/constans/Color';

const InputWrapper = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 2px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TxtInput = styled.TextInput`
  padding: 15px 0;
  width: 90%;
  color: ${Color.BLACK}
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
  change(text: string): void;
  value: string;
  holder: string;
  inputError: string | undefined;
  onSubmitEditing?(): void;
  returnKeyType?: returnKyeType;
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
          secureTextEntry={type === InputTypes.PASSWORD}
          value={value}
          returnKeyType={returnKeyType}
          placeholderTextColor={Color.LIGHTGREYXX}
          autoCapitalize = 'none'
        />
      </InputWrapper>
      {inputError && <Error inputError={inputError} />}
    </View>
  );
};

export default FormikInput;
