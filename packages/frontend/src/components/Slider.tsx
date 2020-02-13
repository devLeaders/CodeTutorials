import * as React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Colors from "../constans/Colors";
import { TweenLite, Power3 } from "gsap";
import Movie from "../components/Movie";

const Wrapper = styled.div`
  justify-content: flex-end;
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
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

const GsapMovies: Array<any> = [];

export interface SliderProps {
  id: number;
}

const Slider: React.SFC<SliderProps> = props => {
  let wrapper: any;
  const WrapperRef = useRef(null);
  const [ScreenWidth, setScreenWidth] = useState(0);
  const [MoviePosition, setMoviePosition] = useState(0);

  const handleMoveSlider = (direction: string) => {
    let move;
    if (direction === "right" && MoviePosition < 0) {
      move = ScreenWidth;
      changePosition(move);
    } else if (direction === "left" && MoviePosition > -1280) {
      move = -ScreenWidth;
      changePosition(move);
    }
  };

  const changePosition = (move: number) => {
    setMoviePosition(MoviePosition + move);
    TweenLite.to(GsapMovies, 0.4, {
      x: MoviePosition + move,
      ease: Power3.easeOut
    });
  };

  useEffect(() => {
    setScreenWidth(wrapper.offsetWidth);
    console.log(MoviePosition);
  });

  const movieList = movies.map((movie, index) => {
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        index={index}
        movies={GsapMovies}
      ></Movie>
    );
  });

  return (
    <Wrapper ref={Wrapper => (wrapper = Wrapper)}>
      <Button onClick={() => handleMoveSlider("right")}>
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

      <Button className="left" onClick={() => handleMoveSlider("left")}>
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
