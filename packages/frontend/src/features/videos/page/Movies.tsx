import React from "react";
import MovieNavBar from "../../common/components/layout/header/MovieNavBar";
import styled from "styled-components";
import MovieSection from "../components/movieList/MovieSection";
import NewContent from "../components/movieList/NewContent";
import { Device } from "../../common/styles/constans/Device";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const Section = styled.section`
  height: 250px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${Device.MOBILE_M} {
    height: 300px;
  }
  @media ${Device.TABLET} {
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
      </Section>
      <SliderSection>
        <MovieSection title="Polecane dla ciebie"></MovieSection>
        <MovieSection title="Akcja"></MovieSection>
        <MovieSection title="Dramaty"></MovieSection>
      </SliderSection>
    </Wrapper>
  );
};

export default Movies;
