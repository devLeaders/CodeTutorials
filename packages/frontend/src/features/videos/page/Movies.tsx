import React from "react";
import styled from "styled-components";

import { Device } from "../../common/styles/constans/Device";
import Header from "../../common/components/layout/header/Header";
import Aside from "../../common/components/layout/Aside";
import VideoPlayerComponent from "../../videoPlayer/VideoPlayerComponent";
import SliderContainer from "../components/movieList/SliderContainer";

const Main = styled.div`
  width: 100%;
  @media ${Device.LAPTOP} {
    width: calc(100% - 446px);
  }
`;

const SlidersSection = styled.div`
  margin-top: -50px;
  overflow: hidden;
  @media ${Device.TABLET} {
    margin-top: -90px;
  }
  @media ${Device.LAPTOP_L} {
    margin-top: -160px;
  }
`;
const titles = [
  "Ostatnio dodane",
  "Najlepiej Oceniane",
  "Najczęściej oglądane",
];

export interface MoviesProps {}

const Movies: React.SFC<MoviesProps> = () => {
  return (
    <>
      <Header homePage={true} />
      <Main>
        <VideoPlayerComponent />
        <SlidersSection>
          {titles.map((title: string) => (
            <SliderContainer key={title} title={title} />
          ))}
        </SlidersSection>
      </Main>
      <Aside />
    </>
  );
};

export default Movies;
