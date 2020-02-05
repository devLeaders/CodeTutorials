import React from "react";
import MoviesTypes from "../pages/MoviesTypes.d";
import MovieNavBar from "../components/MovieNavBar";
import styled from "styled-components";
import FiltrationBtns from "../components/FiltrationBtns";

export default class Movies extends React.Component<any, MoviesTypes> {
  render() {
    return (
      <Wrapper>
        <MovieNavBar></MovieNavBar>
        <NewContent />
        <FiltrationBtns></FiltrationBtns>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const NewContent = styled.div`
  margin-top: 30px;
  height: 150px;
  width: 90%;
  background-color: red;
`;
