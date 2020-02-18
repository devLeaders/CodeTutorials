import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
  min-width: ${(props: { width: number }) => `${props.width - 1}%`};
  height: 100%;
  overflow: hidden;
  margin-right: 0.5%;
  margin-left: 0.5%;
  color: white;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 8px;
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
      <Img
        src="https://cdn.pixabay.com/photo/2020/02/12/16/13/landscape-4843193_960_720.jpg"
        alt=""
      />
    </Wrapper>
  );
};

export default Movie;
