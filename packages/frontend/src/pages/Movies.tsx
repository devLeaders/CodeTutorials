import React from "react";
import MoviesTypes from "../pages/MoviesTypes.d";
import MovieNavBar from "../components/MovieNavBar";
import styled from "styled-components";
import FiltrationBtns from "../components/FiltrationBtns";
import MovieSection from "../components/MovieSection";
import Colors from "../constans/Colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  background-color: #222;
  width: 100%;
`;

const NewContent = styled.div`
  height: 60%;
  width: 100%;
  background-color: red;
`;

const Section = styled.section`
  margin-top: 20%;
  height: 250px;
  display: flex;
  flex-direction: column;
  width: 90%;
`;
const SliderSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default class Movies extends React.Component<any, MoviesTypes> {
  render() {
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
  }
}
