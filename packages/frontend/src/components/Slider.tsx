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

export interface SliderState {
  screenWidth: number;
  moviePosition: number;
  moviesOnScreen: number;
  width: number;
}

class Slider extends React.PureComponent<SliderProps, SliderState> {
  state = {
    screenWidth: 0,
    moviePosition: 0,
    moviesOnScreen: 2,
    width: 0
  };

  handleResize = () => {
    this.setState({ screenWidth: window.innerWidth });
    this.handleMoviesOnScreen(window.innerWidth);
  };

  handleMoveSlider = (direction: string) => {
    const { screenWidth, moviePosition, moviesOnScreen } = this.state;
    const end =
      (Math.ceil(this.GsapMovies.length / moviesOnScreen) - 1) * screenWidth;
    let move;
    if (direction === "right" && moviePosition < 0) {
      move = screenWidth;
      this.changePosition(move);
    } else if (direction === "left" && moviePosition > -end) {
      move = -screenWidth;
      this.changePosition(move);
    }
  };

  handleMoviesOnScreen = (width: number) => {
    let moviesOnScreen = 0;

    if (width > 0 && width <= 550) {
      moviesOnScreen=2;
    } else if (width >= 550 && width < 800) {
      moviesOnScreen=3;
    } else if (width >= 800 && width < 1210) {
      moviesOnScreen=4;
    } else if (width >= 1210 && width < 1540) {
      moviesOnScreen=5;
    } else if (width >= 1540) {
      moviesOnScreen=6;
    }

    this.setState({
      screenWidth: window.innerWidth,
      moviesOnScreen,
      width: 100 / moviesOnScreen
    });
  };

  changePosition = (move: number) => {
    this.setState({ moviePosition: this.state.moviePosition + move });
    TweenLite.to(this.GsapMovies, 0.4, {
      x: this.state.moviePosition + move,
      ease: Power3.easeOut
    });
  };

  GsapMovies: Array<any> = [];
  componentDidMount() {
    this.handleMoviesOnScreen(window.innerWidth);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  right = () => this.handleMoveSlider("right");
  left = () => this.handleMoveSlider("left");
  render() {
    return (
      <Wrapper>
        <Button onClick={this.right}>
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

        <Button className="left" onClick={this.left}>
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
        <MovieWrapper>
          {movies.map((movie, index) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                index={index}
                movies={this.GsapMovies}
                width={this.state.width}
                ref={(movie:any) => (this.GsapMovies[index] = movie)}
              ></Movie>
            );
          })}
        </MovieWrapper>
      </Wrapper>
    );
  }
}

export default Slider;
