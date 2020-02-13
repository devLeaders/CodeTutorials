import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
  min-width: 49%;
  height: 100%;
  margin-right: 0.5%;
  margin-left: 0.5%;
  background-color: black;
  color: white;
`;

export interface MovieProps {
  id: number;
  index: number;
  movies: Array<any>;
}

const Movie: React.SFC<MovieProps> = props => {
  const { movies, index } = props;
  return <Wrapper ref={movie => (movies[index] = movie)}>{props.id}</Wrapper>;
};

export default Movie;
