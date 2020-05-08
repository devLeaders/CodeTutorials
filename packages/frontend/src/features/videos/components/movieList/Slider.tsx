import React, {useRef, useEffect, useState} from "react";
import styled from "styled-components";
import { gsap, TweenLite, Power3 } from "gsap";

import getMovieList from "../../action/getMoviesList";
import VideoItem from "./videoItem/VideoItem";
import SliderBtns from "./SliderBtns"
import Slide from "../../providers/Slide";

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  height: 100%;
`;


const VideoWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background-color: red;
  width: 85%;
  /* overflow: hidden; */
`;

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


 



const Slider: React.SFC = () => {
  const VideoWrapperRef = useRef<HTMLDivElement>(null)
  const gsapMovies:any = [];

  
    return (
      <Slide
        gsapMovies={gsapMovies}
        videoWrapperRef={VideoWrapperRef}
        render={({handleMove, margin}: any) => (
          <Wrapper>
            <SliderBtns onClick={handleMove}/>
            <VideoWrapper ref={VideoWrapperRef}>
              {movies.map((movie, index) => {
                return (
                  <VideoItem
                    key={movie.id}
                    id={movie.id}
                    index={index}
                    margin={margin}
                    ref={(video: any) => (gsapMovies[index] = video)}
                  ></VideoItem>
                );
              })}
            </VideoWrapper>
          </Wrapper>
        )}
      />
    );
}

export default Slider;
