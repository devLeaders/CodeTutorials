import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/colors';
import { fontFamily } from '../../utils/fontFamily';
import { fontSize } from '../../utils/fontSize';

const Input = styled.input`
  width: 100%;
  outline: 0;
  border: 0;
  border-bottom: 2px solid ${Colors.colorInput};
  padding-bottom: 8px;
  margin-bottom: 30px;
  font-family: ${fontFamily.openSansFont};
  font-size: ${fontSize.paragraphMobile};
  background-image: url('email.svg');
  background-position: left 20%;
  background-size: 17px 17px;
  background-repeat: no-repeat;
  padding-left: 25px;
  cursor: pointer;
  &::placeholder {
    color: ${Colors.colorInput};
  }
`;

const EmailField: React.FC = (props: any) => {

  return (
    <Input type="text" placeholder="Email"></Input>
  )
}

export default EmailField;