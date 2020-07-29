import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontSize } from "../../../common/styles/constans/FontSize";
import { Colors } from "../../../common/styles/constans/Colors";
import { Navigation } from "../../../../config/routing/NavigationPath";

const StyledLink = styled(Link)`
  color: ${Colors.LIGHT_PURPLE};
  font-size: ${FontSize.XXXXMEDIUM};
  text-decoration: none;
  text-align: center;
  margin-top: 50px;
`;

const SignInRedirect: React.FC = () => {
  return (
    <StyledLink to={Navigation.LOGIN}>Posiadasz konto? Zaloguj się</StyledLink>
  );
};
export default SignInRedirect;
