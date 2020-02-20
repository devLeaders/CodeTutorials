import * as React from "react";
import styled from "styled-components";
import { gsap, TweenLite, Power3 } from "gsap";
import Movie from "../components/Movie";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  top: 50%;
  right: 2%;
  z-index: 2;
  left: ${(props: { left?: any }) => (props.left ? "2%" : "")};
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
enum screenWidths {
  PHONE = 550,
  TABLET = 800,
  LAPTOP = 1210,
  DESKTOP = 1540
}
enum directions {
  RIGHT = "right",
  LEFT = "left"
}

enum moves {}

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
    moviesOnScreen: 0,
    width: 0
  };

  handleResize = () => {
    this.setState({
      screenWidth: document.body.clientWidth,
      moviePosition: 0
    });
    TweenLite.to(this.GsapMovies, 0, {
      x: this.state.moviePosition,
      ease: Power3.easeOut
    });
    this.handleMoviesOnScreen(document.body.clientWidth);
  };

  handleMoveSlider = (direction: string) => {
    const { screenWidth, moviePosition, moviesOnScreen } = this.state;
    // total lenght of slider
    const end =
      (Math.ceil(this.GsapMovies.length / moviesOnScreen) - 1) * screenWidth;
    let move;
    if (direction === directions.RIGHT) {
      move = -screenWidth;
      this.changePosition(move, end, direction);
    } else if (direction === directions.LEFT) {
      move = +screenWidth;
      this.changePosition(move, end, direction);
    }
  };

  changePosition = (move: number, end: number, direction: string) => {
    const { moviePosition, moviesOnScreen } = this.state;
    const { GsapMovies } = this;
    const position = moviePosition + move;
    const additionalMoviesNumber: number = GsapMovies.length % moviesOnScreen;
    const aditionalMoveLeft: number =
      (move * (moviesOnScreen - additionalMoviesNumber)) / moviesOnScreen;
    const firstMovies = [...GsapMovies].slice(0, moviesOnScreen);
    this.setState({
      moviePosition: position
    });
    if (moviePosition >= -end) {
      if (
        moviePosition === -end - move ||
        (moviePosition === -move &&
          direction === directions.RIGHT &&
          additionalMoviesNumber !== 0)
      ) {
        this.handleAnimation(
          (move * additionalMoviesNumber) / moviesOnScreen,
          GsapMovies
        );
      } else if (
        moviePosition === -move &&
        direction === directions.LEFT &&
        additionalMoviesNumber !== 0
      ) {
        this.handleAnimation(
          (move * additionalMoviesNumber) / moviesOnScreen,
          GsapMovies
        );
      } else {
        this.handleAnimation(move, GsapMovies);
      }
    }
    if (moviePosition === 0 && direction === directions.LEFT) {
      this.setState({ moviePosition: -end });
      // TweenLite.fromTo(
      //   GsapMovies,
      //   0.4,
      //   { x: -end - move },
      //   { x: additionalMoviesNumber !== 0 ? -end + aditionalMoveLeft : -end }
      // );
      gsap
        .timeline()
        .fromTo(firstMovies, 0.4, { x: 0 }, { x: move })
        .fromTo(
          GsapMovies,
          0.4,
          { x: -end - move },
          { x: -end + aditionalMoveLeft },
          0
        );
    }
    if (moviePosition === -end && direction === directions.RIGHT) {
      this.setState({ moviePosition: 0 });
      gsap
        .timeline()
        .fromTo(firstMovies, 0.4, { x: 0 }, { x: move })
        .fromTo(GsapMovies, 0.4, { x: -move }, { x: 0 });
    }
  };

  handleAnimation(position: number, elements: Array<any>) {
    TweenLite.to(elements, 0.4, {
      x: "+=" + position,
      ease: Power3.easeOut
    });
  }

  handleMoviesOnScreen = (width: number) => {
    let moviesOnScreen = 0;
    if (width > 0 && width <= screenWidths.PHONE) {
      moviesOnScreen = 2;
    } else if (width >= screenWidths.PHONE && width < screenWidths.TABLET) {
      moviesOnScreen = 3;
    } else if (width >= screenWidths.TABLET && width < screenWidths.LAPTOP) {
      moviesOnScreen = 4;
    } else if (width >= screenWidths.LAPTOP && width < screenWidths.DESKTOP) {
      moviesOnScreen = 5;
    } else if (width >= screenWidths.DESKTOP) {
      moviesOnScreen = 6;
    }
    this.setState({
      screenWidth: document.body.clientWidth,
      moviesOnScreen,
      width: 100 / moviesOnScreen
    });
  };

  GsapMovies: Array<any> = [];
  componentDidMount() {
    this.handleMoviesOnScreen(document.body.clientWidth);
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
        <Button left onClick={this.left}>
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
        <MovieWrapper>
          {movies.map((movie, index) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                index={index}
                width={this.state.width}
                ref={(movie: any) => (this.GsapMovies[index] = movie)}
              ></Movie>
            );
          })}
        </MovieWrapper>
      </Wrapper>
    );
  }
}

export default Slider;
