import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
  min-width: ${(props: { width: number }) => `${props.width - 1}%`};
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
  width: number;
}

const Movie: React.SFC<MovieProps> = props => {
  const { movies, index, width, id } = props;
  return (
    <Wrapper width={width} ref={movie => (movies[index] = movie)}>
      {id}
    </Wrapper>
  );
};

export default Movie;
