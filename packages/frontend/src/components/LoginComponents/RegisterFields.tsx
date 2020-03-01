import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/colors';
import { fontFamily } from '../../utils/fontFamily';
import { fontSize } from '../../utils/fontSize';
import SocialMedia from '../LoginComponents/SocialMedia';

const Link = styled.a`
  width: 100%;
  color: ${Colors.colorStar};
  font-family:${fontFamily.openSansFont};
  font-size: ${fontSize.paragraphMobile};
  text-decoration: none;
  text-align: center;
  margin-top: 50px;
`;

const Paragraph = styled.p`
  width: min-content;
  color: ${Colors.colorInput};
  font-family:${fontFamily.openSansFont};
  font-size: ${fontSize.paragraphMobile};
  text-decoration: none;
  text-align: center;
  margin: 30px auto;
  position: relative;
  &:after {
      display: block;
      position: absolute;
      width: 30px;
      height: 1px;
      background-color: ${Colors.colorInput};
      content: "";
      top:10px;
      left: -40px;
  }
  &:before {
      display: block;
      position: absolute;
      width: 30px;
      height: 1px;
      background-color: ${Colors.colorInput};
      content: "";
      top:10px;
      right: -40px;
  }
`;

const RegisterFields: React.FC = (props: any) => {

    return (
        <>
            <Link href="www.google.pl">Nie posiadasz konta?</Link>
            <Paragraph >lub</Paragraph>
            <SocialMedia></SocialMedia>
        </>
    )
}

export default RegisterFields;