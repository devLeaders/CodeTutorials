import * as React from "react";
import { useRef } from "react";
import styled from "styled-components";
import VideoItem from "../components/movieList/VideoItem";
import BannerContainer from "../../common/components/layout/banner/BannerContainer";
import NavBarContainer from "../../common/components/layout/navBar/NavBarContainer";
import { Device } from "../../common/styles/constans/Device";
import { useFillerItems } from "../hooks/useFillerItems";
import Aside from "../../common/components/layout/aside/Aside";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 110px;
`;
const HeaderWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  position: fixed;
  top: 0;
`;
const MovieListConstainer = styled.div`
  margin-top: 38px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media ${Device.LAPTOP} {
    width: calc(100% - 443px);
  }
`;
const MainSectionWrapper = styled.div`
  display: flex;
`;
const InvisibleMovie = styled.div<{ width: number; margin: number }>`
  width: ${({ width }) => `${width}px`};
  margin: ${({ margin }) => `0 ${margin}px`};
`;

const moviesList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

export interface MovieListViewProps {
  containerWidth: number;
}

const MovieListView: React.FC<MovieListViewProps> = () => {
  const movieListContainer = useRef<any>(null);
  const movieItem = useRef<any>(null);
  const minMargin = 20;
  const fillerItems = useFillerItems(
    movieListContainer,
    movieItem,
    moviesList.length,
    minMargin
  );
  return (
    <Wrapper>
      <HeaderWrapper>
        <BannerContainer />
        <NavBarContainer />
      </HeaderWrapper>
      <MainSectionWrapper>
        <MovieListConstainer ref={movieListContainer}>
          {moviesList.map((item) => (
            <VideoItem key={item} ref={movieItem} margin={minMargin} />
          ))}
          {fillerItems &&
            fillerItems.map((item: any) => (
              <InvisibleMovie
                key={item}
                width={movieItem.current?.offsetWidth}
                margin={minMargin}
              />
            ))}
        </MovieListConstainer>
        <Aside />
      </MainSectionWrapper>
    </Wrapper>
  );
};

export default MovieListView;
