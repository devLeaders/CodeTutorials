import React from 'react';
import styled from 'styled-components';
import { FontFamily } from '../../../common/styles/constans/FontFamily';
import { FontSize } from '../../../common/styles/constans/FontSize';
import {Colors} from '../../../common/styles/constans/Colors';

const Link = styled.a`
  width: 100%;
  color: ${Colors.nRed};
  font-family:${FontFamily.openSansFont};
  font-size: ${FontSize.paragraphMobile};
  text-decoration: none;
  text-align: right;
  padding: 50px 0;
`;

const RecoveryPass: React.FC = (props: any) => {

  return (
    <Link href="#">Zapomniałeś hasła?</Link>
  )
}

export default RecoveryPass;