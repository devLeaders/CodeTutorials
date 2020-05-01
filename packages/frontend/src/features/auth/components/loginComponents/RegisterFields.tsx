import React from 'react';
import styled from 'styled-components';
import { FontFamily } from '../../../common/styles/constans/FontFamily';
import { FontSize } from '../../../common/styles/constans/FontSize';
import SocialMedia from './SocialMedia';
import {Colors} from '../../../common/styles/constans/Colors';

const Link = styled.a`
  width: 100%;
  color: ${Colors.nRed};
  font-family:${FontFamily.openSansFont};
  font-size: ${FontSize.paragraphMobile};
  text-decoration: none;
  text-align: center;
  margin-top: 50px;
`;

const Paragraph = styled.p`
  width: min-content;
  color: ${Colors.nLightGrey};
  font-family:${FontFamily.openSansFont};
  font-size: ${FontSize.paragraphMobile};
  text-decoration: none;
  text-align: center;
  margin: 30px auto;
  position: relative;
  &:after {
      display: block;
      position: absolute;
      width: 30px;
      height: 1px;
      background-color: ${Colors.nLightGrey};
      content: "";
      top:10px;
      left: -40px;
  }
  &:before {
      display: block;
      position: absolute;
      width: 30px;
      height: 1px;
      background-color: ${Colors.nLightGrey};
      content: "";
      top:10px;
      right: -40px;
  }
`;

const RegisterFields: React.FC = (props: any) => {

    return (
        <>
            <Link href="#">Nie posiadasz konta?</Link>
            <Paragraph >lub</Paragraph>
            <SocialMedia></SocialMedia>
        </>
    )
}

export default RegisterFields;