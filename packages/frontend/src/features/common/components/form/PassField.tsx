import React from 'react';
import styled from 'styled-components';
import Colors from '../../styles/constans/Colors';
import { FontFamily } from '../../styles/constans/FontFamily';
import { FontSize } from '../../styles/constans/FontSize';

const Input = styled.input`
  width: 100%;
  outline: 0;
  border: 0;
  border-bottom: 2px solid ${Colors.nGrey};
  padding-bottom: 8px;
  margin-bottom: 30px;
  font-family: ${FontFamily.openSansFont};
  font-size: ${FontSize.paragraphMobile};
  background-image: url('img/pass.svg');
  background-position: left top;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  padding-left: 25px;

  cursor: pointer;
  &::placeholder {
    color: ${Colors.nGrey};
  }
`;

const PassField = ({field, form, ...props}:any) =>{
    return (
        <Input type="text" placeholder="Hasło" {...field}/>
    )
}

export default PassField;