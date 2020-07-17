import * as React from "react";
import { useRef } from "react";
import styled from "styled-components";

import VideoItem from "../components/movieList/videoItem/VideoItem";
import Header from "../../common/components/layout/header/Header";
import Aside from "../../common/components/layout/Aside";
import { Device } from "../../common/styles/constans/Device";
import { useFillerItems } from "../hooks/useFillerItems";

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 90px;
  @media ${Device.LAPTOP} {
    padding-top: 150px;
    width: calc(100% - 446px);
  }
`;
const InvisibleMovie = styled.div<{ width: number | undefined; margin: number}>`
  width: ${({ width }) => `${width}px`};
  margin: ${({ margin }) => `0 ${margin}px`};
`;

const moviesList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

export interface MovieListViewProps {
  containerWidth: number;
}

const MovieListView: React.FC<MovieListViewProps> = () => {
  const movieListContainer = useRef<HTMLDivElement>(null);
  const videoItem = useRef<HTMLDivElement>(null);
  const minMargin = 20;
  const fillerItems = useFillerItems(
    movieListContainer,
    videoItem,
    moviesList.length,
    minMargin
  );

  return (
    <>
      <Header opacity={true}/>
      <Main ref={movieListContainer}>
        {moviesList.map((item) => (
          <VideoItem id={1} key={item} ref={videoItem} margin={minMargin} />
        ))}
        {fillerItems &&
          fillerItems.map((item: number) => (
            <InvisibleMovie
              key={item}
              width={videoItem.current?.offsetWidth}
              margin={minMargin}
            />
          ))}
      </Main>
      <Aside />
    </>
  );
};

export default MovieListView;
