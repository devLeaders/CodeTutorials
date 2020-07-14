import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontSize } from "../../../common/styles/constans/FontSize";
import { Colors } from "../../../common/styles/constans/Colors";
import { Device } from "../../../common/styles/constans/Device";
const StyledLink = styled(Link)`
  color: ${Colors.LIGHT_PURPLE};
  font-size: ${FontSize.XXXXMEDIUM};
  text-decoration: none;
  padding: 50px 0;
  text-align: center;
  @media ${Device.TABLET} {
    text-align: right;
  }
`;

const RecoveryPass: React.FC = (props: any) => {
  return <StyledLink to='#'>Zapomniałeś hasła?</StyledLink>;
};

export default RecoveryPass;
