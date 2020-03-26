import React, { useEffect } from "react";
import MovieNavBar from "../components/MovieNavBar";
import styled from "styled-components";
import FiltrationBtns from "../components/FiltrationBtns";
import MovieSection from "../components/MovieSection";
import NewContent from "../components/NewContent";
import Colors from "../../constans/Colors";
import { device } from "../../constans/device";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #222;
  width: 100%;
`;

const Section = styled.section`
  height: 250px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${device.MOBILE_M} {
    height: 300px;
  }
  @media ${device.TABLET} {
    height: 450px;
  }
`;
const SliderSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export interface MoviesProps { }

const Movies: React.SFC<MoviesProps> = () => {
  return (
    <Wrapper>
      <MovieNavBar></MovieNavBar>
      <Section>
        <NewContent />
        <FiltrationBtns></FiltrationBtns>
      </Section>
      <SliderSection>
        <MovieSection title="Polecane dla ciebie" id={1}></MovieSection>
        <MovieSection title="Akcja" id={2}></MovieSection>
        <MovieSection title="Dramaty" id={3}></MovieSection>
      </SliderSection>
    </Wrapper>
  );
};

export default Movies;
