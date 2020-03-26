import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import Colors from "../../constans/Colors";
import Fonts from "../../constans/Fonts";
import Slider from "./Slider";
import { device } from "../../constans/device";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 8rem;
  width: 100%;
  padding: 5px 0 0 0;
  position: relative;
  @media ${device.MOBILE_M} {
    height: 9rem;
  }
  @media ${device.TABLET} {
    height: 11rem;
  }
`;

const Title = styled.h2`
  font-size: ${Fonts.medium};
  margin-left: 15px;
  align-self: flex-start;
  color: ${Colors.nLightGrey};
  @media ${device.TABLET} {
    font-size: ${Fonts.desktopMedium};
  }
`;

export interface MovieSectionProps {
  title: string;
  id: number;
}

const MovieSection: React.SFC<MovieSectionProps> = props => {
  const { title, id } = props;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Slider id={id}></Slider>
    </Wrapper>
  );
};

export default MovieSection;
