import * as React from "react";
import styled from "styled-components";
import Colors from "../constans/Colors";
import Slider from "../components/Slider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 8rem;
  width: 100%;
  padding: 5px 0;
  background-color: ${Colors.nGrey};
  position: relative;
`;

const Title = styled.h2`
  font-size: 0.7rem;
  align-self: flex-start;
  color: ${Colors.nWhite};
`;

export interface MovieSectionProps {
  title: string;
}

const MovieSection: React.SFC<MovieSectionProps> = props => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Slider></Slider>
    </Wrapper>
  );
};

export default MovieSection;
