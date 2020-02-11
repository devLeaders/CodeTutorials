import * as React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Colors from "../constans/Colors";
import { TweenLite, Power3 } from "gsap";
import gsap from "gsap";

const Wrapper = styled.div`
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
  top: 45%;
  right: 2%;
  height: 20px;
  width: 20px;
  z-index: 2;
  &.left {
    left: 2%;
  }
`;

const MovieWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90%;
  width: 100%;
  padding: 2px 0;
  margin: 3px 0 0 0;
  overflow: hidden;
`;
const Movie = styled.div`
  cursor: pointer;
  min-width: 46%;
  height: 100%;
  margin-right: 2%;
  margin-left: 2%;
  background-color: black;
  color: white;
`;

const movies = [
  {
    id: 1,
    title: "Piraci z karaibów",
    urlTrailer: "t1",
    urlphoto: "p1"
  },
  {
    id: 2,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2"
  },
  {
    id: 3,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2"
  },
  {
    id: 4,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2"
  },
  {
    id: 5,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2"
  },
  {
    id: 6,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2"
  },
  {
    id: 7,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2"
  },
  {
    id: 8,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2"
  },
  {
    id: 9,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2"
  },
  {
    id: 10,
    title: "Gwiezdne wojny",
    urlTrailer: "t2",
    urlphoto: "p2"
  }
];

const GsapMovies: Array<any> = [];

export interface SliderProps {}

const Slider: React.SFC<SliderProps> = () => {
  let wrapper: any;
  const WrapperRef = useRef(null);
  const [MovieId, setMovieId] = useState(0);
  const [ScreenWidth, setScreenWidth] = useState(0);
  const [MoviePosition, setMoviePosition] = useState(0);
  const handleTrailerChange = (id: number) => {
    console.log(id);
    setMovieId(id);
  };

  const handleMoveSlider = (direction: string) => {
    if (direction === "right" && MoviePosition < 0) {
      setMoviePosition(MoviePosition + ScreenWidth);
      TweenLite.to(GsapMovies, 0.4, {
        x: MoviePosition + ScreenWidth,
        ease: Power3.easeOut
      });
    } else if (direction === "left" && MoviePosition > -1280) {
      setMoviePosition(MoviePosition - ScreenWidth);
      TweenLite.to(GsapMovies, 0.4, {
        x: MoviePosition - ScreenWidth,
        ease: Power3.easeIn
      });
    }
  };

  // const getMoviePosition = () => {
  //   GsapMovies.forEach(movie => {
  //     console.log(movie.position());
  //   });
  // };
  useEffect(() => {
    setScreenWidth(wrapper.offsetWidth);
    // console.log(ScreenWidth);
    console.log(MoviePosition);
  });

  const movieList = movies.map((movie, index) => {
    return (
      <Movie
        key={movie.id}
        onClick={() => handleTrailerChange(movie.id)}
        ref={Movie => (GsapMovies[index] = Movie)}
      >
        <div>{movie.id === MovieId ? movie.title : movie.id}</div>
        <div>{movie.id}</div>
      </Movie>
    );
  });

  return (
    <Wrapper ref={Wrapper => (wrapper = Wrapper)}>
      <Button onClick={() => handleMoveSlider("right")}></Button>
      <Button
        className="left"
        onClick={() => handleMoveSlider("left")}
      ></Button>
      <MovieWrapper>{movieList}</MovieWrapper>
    </Wrapper>
  );
};

export default Slider;
