import * as React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Colors from "../constans/Colors";
import { TweenLite, Power3 } from "gsap";
import Movie from "../components/Movie";
import getMovieList from "../axios/getMoviesList";

const Wrapper = styled.div`
  justify-content: flex-end;
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  top: 45%;
  right: 2%;
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
  margin: 3px 0 0 0;
  overflow: hidden;
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

export interface SliderProps {
  id: number;
}

const Slider: React.SFC<SliderProps> = props => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [moviePosition, setMoviePosition] = useState(0);
  const [moviesOnScreen, setMoviesOnScreen] = useState(0);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const handleMoveSlider = (direction: string) => {
    const end =
      (Math.ceil(GsapMovies.length / moviesOnScreen) - 1) * screenWidth;
    let move;
    if (direction === "right" && moviePosition < 0) {
      move = screenWidth;
      changePosition(move);
    } else if (direction === "left" && moviePosition > -end) {
      move = -screenWidth;
      changePosition(move);
    }
  };

  const handleMoviesOnScreen = (width: number) => {
    if (width > 0 && width <= 550) {
      setMoviesOnScreen(2);
    } else if (width >= 550 && width < 800) {
      setMoviesOnScreen(3);
    } else if (width >= 800 && width < 1210) {
      setMoviesOnScreen(4);
    } else if (width >= 1210 && width < 1540) {
      setMoviesOnScreen(5);
    } else if (width >= 1540) {
      setMoviesOnScreen(6);
    }
  };

  const changePosition = (move: number) => {
    setMoviePosition(moviePosition + move);
    TweenLite.to(GsapMovies, 0.4, {
      x: moviePosition + move,
      ease: Power3.easeOut
    });
  };

  const GsapMovies: Array<any> = [];

  useEffect(() => {
    console.log(moviePosition);
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleMoviesOnScreen(screenWidth);
    console.log(screenWidth);
    getMovieList();

    return () => window.removeEventListener("resize", handleResize);
  });

  const movieList = movies.map((movie, index) => {
    let width = 100 / moviesOnScreen;
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        index={index}
        movies={GsapMovies}
        width={width}
      ></Movie>
    );
  });
  const right = () => handleMoveSlider("right");
  const left = () => handleMoveSlider("left");
  return (
    <Wrapper>
      <Button onClick={right}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      </Button>

      <Button className="left" onClick={left}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </Button>
      <MovieWrapper>{movieList}</MovieWrapper>
    </Wrapper>
  );
};

export default Slider;
