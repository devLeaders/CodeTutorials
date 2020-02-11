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
  height: 100vh;
  background-color: #222;
  width: 100%;
`;

const NewContent = styled.div`
  height: 60%;
  width: 100%;
  background-color: red;
`;

const Section = styled.section`
  margin-top: 15px;
  height: 35%;
  display: flex;
  flex-direction: column;
  width: 90%;
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
        <MovieSection title="Polecane dla ciebie"></MovieSection>
      </Wrapper>
    );
  }
}
