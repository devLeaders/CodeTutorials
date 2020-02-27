import * as React from "react";
import styled from "styled-components";
import { gsap, TweenLite, Power3 } from "gsap";
import Movie from "../components/Movie";
import getMovieList from "../axios/getMoviesList";

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
const Img = styled.img`
  color: white;
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
enum ScreenWidths {
  PHONE = 550,
  TABLET = 800,
  LAPTOP = 1210,
  DESKTOP = 1540
}
enum Directions {
  RIGHT = "right",
  LEFT = "left"
}

export interface SliderProps {
  id: number;
}

export interface SliderState {
  screenWidth: number;
  moviePosition: number;
  moviesOnScreen: number;
  width: number;
  movieList: Array<any>;
}

class Slider extends React.PureComponent<SliderProps, SliderState> {
  state = {
    screenWidth: 0,
    moviePosition: 0,
    moviesOnScreen: 0,
    width: 0,
    movieList: []
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
    if (direction === Directions.RIGHT) {
      move = -screenWidth;
      this.changePosition(move, end, direction);
    } else if (direction === Directions.LEFT) {
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
    const lastMovies = [...GsapMovies].slice(
      GsapMovies.length - moviesOnScreen,
      GsapMovies.length
    );
    console.log(lastMovies);
    this.setState({
      moviePosition: position
    });

    if (
      moviePosition === -end - move &&
      direction === Directions.RIGHT &&
      additionalMoviesNumber !== 0
    ) {
      this.handleAnimation(
        (move * additionalMoviesNumber) / moviesOnScreen,
        GsapMovies
      );
    } else if (
      moviePosition === -move &&
      direction === Directions.LEFT &&
      additionalMoviesNumber !== 0
    ) {
      this.handleAnimation(
        (move * additionalMoviesNumber) / moviesOnScreen,
        GsapMovies
      );
    } else if (moviePosition === 0 && direction === Directions.LEFT) {
      this.setState({ moviePosition: -end });
      gsap
        .timeline()
        .fromTo(
          GsapMovies,
          0.4,
          { x: -end - move },
          { x: additionalMoviesNumber !== 0 ? -end + aditionalMoveLeft : -end }
        )
        .fromTo(firstMovies, 0.4, { x: 0 }, { x: move }, "<")
        .to(firstMovies, 0, {
          x: additionalMoviesNumber !== 0 ? -end + aditionalMoveLeft : -end
        });
    } else if (moviePosition === -end && direction === Directions.RIGHT) {
      this.setState({ moviePosition: 0 });
      gsap
        .timeline()
        .fromTo(lastMovies, 0.4, { x: -end }, { x: -end + move })
        .fromTo(GsapMovies, 0.4, { x: -move }, { x: 0 }, "<");
      // .to(lastMovies, 0, { x: 0, ease: Power3.easeOut });
    } else {
      this.handleAnimation(move, GsapMovies);
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
    if (width > 0 && width <= ScreenWidths.PHONE) {
      moviesOnScreen = 2;
    } else if (width >= ScreenWidths.PHONE && width < ScreenWidths.TABLET) {
      moviesOnScreen = 3;
    } else if (width >= ScreenWidths.TABLET && width < ScreenWidths.LAPTOP) {
      moviesOnScreen = 4;
    } else if (width >= ScreenWidths.LAPTOP && width < ScreenWidths.DESKTOP) {
      moviesOnScreen = 5;
    } else if (width >= ScreenWidths.DESKTOP) {
      moviesOnScreen = 6;
    }
    this.setState({
      screenWidth: document.body.clientWidth,
      moviesOnScreen,
      width: 100 / moviesOnScreen,
      movieList: getMovieList()
    });
  };

  GsapMovies: Array<any> = [];
  componentDidMount() {
    this.handleMoviesOnScreen(document.body.clientWidth);
    window.addEventListener("resize", this.handleResize);
    getMovieList();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  right = () => this.handleMoveSlider("right");
  left = () => this.handleMoveSlider("left");
  render() {
    console.log(this.state.moviePosition);
    return (
      <Wrapper>
        <Button left onClick={this.left}>
          <Img src="left.svg" alt="arrow" />
        </Button>
        <Button onClick={this.right}>
          <Img src="right.svg" alt="arrow" />
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
