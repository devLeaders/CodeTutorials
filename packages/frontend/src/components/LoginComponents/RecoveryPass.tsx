import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { fontFamily } from '../../utils/fontFamily';
import { fontSize } from '../../utils/fontSize';

const Link = styled.a`
  width: 100%;
  color: ${colors.colorStar};
  font-family:${fontFamily.openSansFont};
  font-size: ${fontSize.paragraphMobile};
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