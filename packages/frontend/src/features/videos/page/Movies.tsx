import React from "react";
import styled from "styled-components";

import { Device } from "../../common/styles/constans/Device";
import Header from "../../common/components/layout/header/Header";
import Aside from "../../common/components/layout/Aside";
import VideoPlayerComponent from "../../videoPlayer/VideoPlayerComponent";
import SliderContainer from "../components/movieList/SliderContainer";
import {Sizes} from "../../common/styles/constans/Sizes"

const Main = styled.div`
  width: 100%;
  margin-top: ${Sizes.BANNER_MOBILE};
  @media ${Device.TABLET_L} {
    margin-top: 0;
  }
  @media ${Device.LAPTOP} {
    width: calc(100% - 446px);
  }
`;

const SlidersSection = styled.div`
  overflow: hidden;
  @media ${Device.TABLET} {
    margin-top: -90px;
  }
  @media ${Device.LAPTOP} {
    margin-top: -120px;
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


const Movies: React.SFC = () => {
  return (
    <>
      <Header/>
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
