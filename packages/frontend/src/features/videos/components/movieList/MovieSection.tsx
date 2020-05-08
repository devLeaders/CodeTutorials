import * as React from "react";
import styled from "styled-components";
import {Colors} from "../../../common/styles/constans/Colors";
import Fonts from "../../../common/styles/constans/Fonts";
import Slider from "./Slider";
import { Device } from "../../../common/styles/constans/Device";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  padding: 5px 0 0 0;
  position: relative;
`;

const Title = styled.h2`
  font-size: ${Fonts.medium};
  margin-left: 15px;
  align-self: flex-start;
  color: ${Colors.nLightGrey};
  @media ${Device.tablet} {
    font-size: ${Fonts.desktopMedium};
  }
`;

export interface MovieSectionProps {
  title: string;
}

const MovieSection: React.SFC<MovieSectionProps> = props => {
  const { title } = props;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Slider></Slider>
    </Wrapper>
  );
};

export default MovieSection;
