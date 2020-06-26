import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontSize } from "../../../common/styles/constans/FontSize";
import SocialMedia from "./SocialMedia";
import { Colors } from "../../../common/styles/constans/Colors";
import NAVIGATION from "../../../../config/routing/NavigationPath";
const StyledLink = styled(Link)`
  width: 100%;
  color: ${Colors.LIGHT_PURPLE};
  font-size: ${FontSize.XXXXMEDIUM};
  text-decoration: none;
  text-align: center;
  margin-top: 50px;
`;

const Paragraph = styled.p`
  width: min-content;
  color: ${Colors.nLightGrey};
  font-size: ${FontSize.XXXXMEDIUM};
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
    top: 10px;
    left: -40px;
  }
  &:before {
    display: block;
    position: absolute;
    width: 30px;
    height: 1px;
    background-color: ${Colors.nLightGrey};
    content: "";
    top: 10px;
    right: -40px;
  }
`;

const RegisterFields: React.FC = (props: any) => {
  return (
    <>
      <StyledLink to={NAVIGATION.REGISTER}>Nie posiadasz konta?</StyledLink>
      <Paragraph>lub</Paragraph>
      <SocialMedia />
    </>
  );
};

export default RegisterFields;
