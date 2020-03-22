import React from "react";
import MovieNavBar from "../../common/components/layout/header/MovieNavBar";
import styled from "styled-components";
import FiltrationBtns from "../../filters/FiltrationBtns";
import MovieSection from "../components/movieList/MovieSection";
import NewContent from "../components/movieList/NewContent";
import { Device } from "../../common/styles/constans/Device";
import Tabs from "../../common/components/layout/tabs/tabs"

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
  @media ${Device.mobileM} {
    height: 300px;
  }
  @media ${Device.tablet} {
    height: 450px;
  }
`;
const SliderSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export interface MoviesProps {}

const Movies: React.SFC<MoviesProps> = () => {
  return (
    <Wrapper>
      <MovieNavBar></MovieNavBar>
      <Tabs>
      <div label="Playlista">
        Playlista....
      </div>
      <div label="Zadania">
        Zadania...
      </div>
      <div label="Notatki">
        Notatki...
      </div>
    </Tabs>
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
