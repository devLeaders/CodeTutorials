import React from 'react';
import styled from 'styled-components';
import { FontFamily } from '../../styles/constans/FontFamily';
import { FontSize } from '../../styles/constans/FontSize';
import {Colors} from '../../styles/constans/Colors';

const Input = styled.input`
  width: 100%;
  outline: 0;
  border: 0;
  border-bottom: 2px solid ${Colors.nGrey};
  padding-bottom: 8px;
  margin-bottom: 30px;
  font-size: ${FontSize.SMALLX};
  background-image: url('img/email.svg');
  background-position: left 20%;
  background-size: 17px 17px;
  background-repeat: no-repeat;
  padding-left: 25px;
  cursor: pointer;
  &::placeholder {
    color: ${Colors.nGrey};
  }
`;

const EmailField = ({field, form, ...props}:any) => {

  return ( <Input type="text" placeholder="Email" {...field}/>)
}

export default EmailField;