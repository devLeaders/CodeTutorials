import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/colors';
import { fontFamily } from '../../utils/fontFamily';
import { fontSize } from '../../utils/fontSize';

const Link = styled.a`
  width: 100%;
  color: ${Colors.colorStar};
  font-family:${fontFamily.openSansFont};
  font-size: ${fontSize.paragraphMobile};
  text-decoration: none;
  text-align: right;
  padding-bottom: 50px;
`;

const RecoveryPass: React.FC = (props: any) => {

  return (
    <Link href="www.google.pl">Zapomniałeś hasła?</Link>
  )
}

export default RecoveryPass;