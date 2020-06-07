import * as React from "react";
import styled from "styled-components";

import { Device } from "../../../common/styles/constans/Device";
import VideoItem from "./videoItem/VideoItem";
import SliderBtns from "./SliderBtns";

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  height: 100%;
`;

const VideoWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  @media ${Device.TABLET} {
    width: 95%;
  }
`;

export interface SliderProps {
  handleMove: any;
  margin: any;
  videoWrapperRef: any;
  gsapMovies: any;
}
const movies = [
  {
    id: 1,
    title: "Piraci z karaibów",
    urlTrailer: "t1",
    urlphoto: "p1",
  },
  {
    id: 2,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2",
  },
  {
    id: 3,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2",
  },
  {
    id: 4,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2",
  },
  {
    id: 5,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2",
  },
  {
    id: 6,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2",
  },
  {
    id: 7,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2",
  },
  {
    id: 8,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2",
  },
  {
    id: 9,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2",
  },
  {
    id: 10,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2",
  },
];

const Slider: React.SFC<SliderProps> = ({
  handleMove,
  margin,
  videoWrapperRef,
  gsapMovies,
}) => {
  return (
    <Wrapper>
      <SliderBtns onClick={handleMove} />
      <VideoWrapper ref={videoWrapperRef}>
        {movies.map((movie, index) => {
          return (
            <VideoItem
              key={movie.id}
              id={movie.id}
              index={index}
              marginLeft={margin}
              ref={(video: HTMLDivElement) => (gsapMovies[index] = video)}
            ></VideoItem>
          );
        })}
      </VideoWrapper>
    </Wrapper>
  );
};

export default Slider;
