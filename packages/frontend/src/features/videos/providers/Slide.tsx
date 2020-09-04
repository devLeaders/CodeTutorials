import * as React from "react";
import { TweenLite, Power3 } from "gsap";
import memoizeOne from "memoize-one";

import { Directions } from "../components/movieList/SliderBtns";
import { handleCalculations, calcMargins } from "../action/SliderCalcService";

export interface SlideProps {
  videoWrapperRef: React.RefObject<any>;
  gsapMovies: Array<HTMLDivElement>;
  render: (renderProps: RenderProps) => JSX.Element;
}

export interface SlideState {
  videoPosition: number;
  margin: number;
}

export interface RenderProps {
  handleMove: (e: any) => void;
  margin: number;
}

export interface CustomMouseEvent {
  target: {
    name?: string
  } 
}


class Slide extends React.Component<SlideProps, SlideState> {
  state = {
    videoPosition: 0,
    margin: 0,
  };

  private isAnimating: boolean = false;

  private handleResize = () => {
    const { gsapMovies, videoWrapperRef } = this.props;
    const margin = calcMargins(
      gsapMovies[0].offsetWidth,
      videoWrapperRef.current.offsetWidth
    );
    this.setState({ margin });
    TweenLite.to(gsapMovies, 0, {
      x: 0,
      ease: Power3.easeInOut,
    });
  };

  private animate = (
    elements: Array<HTMLDivElement>,
    move: number,
    time: number
  ) => {
    if (!this.isAnimating) {
      TweenLite.to(elements, time, {
        x: "+=" + move,
        ease: Power3.easeOut,
        onStart: () => {
          this.isAnimating = true;
        },
        onComplete: () => {
          this.isAnimating = false;
        },
      });
      this.setState((prevState: SlideState) => {
        return { videoPosition: prevState.videoPosition + move };
      });
    }
  };

  protected handleMove = (e: CustomMouseEvent) => {
    const { gsapMovies, videoWrapperRef } = this.props;
    const { margin, videoPosition } = this.state;
    const containerWidth = videoWrapperRef.current.offsetWidth;
    const videoWidth = gsapMovies[0].offsetWidth;
    const memoizedCalculations = memoizeOne(handleCalculations);
    const { lastMove, end, move, additionalVideosNum } = memoizedCalculations(
      videoWidth,
      containerWidth,
      gsapMovies.length,
      margin
    );
    let x = e.target?.name === Directions.RIGHT ? -move : move;
    

    x = calcMove(e.target?.name, videoPosition, lastMove, end, additionalVideosNum !== 0, x)
    let time = Math.abs(x) === Math.abs(end) ? 1 : 0.6;

    this.animate(gsapMovies, x, time);
  };

  componentDidMount() {
    const { gsapMovies, videoWrapperRef } = this.props;
    window.addEventListener("resize", this.handleResize);
    const margin = calcMargins(
      gsapMovies[0].offsetWidth,
      videoWrapperRef.current.offsetWidth
    );
    this.setState({ margin });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const renderProps = {
      handleMove: this.handleMove,
      margin: this.state.margin,
    };

    return this.props.render(renderProps);
  }
}

export default Slide;


const calcMove = (
  direction: string | undefined,
  videoPosition: number,
  lastMove: number,
  end: number,
  hasAddidionalvideos: boolean,
  x: number
) => {
  if (videoPosition >= -100 && direction === Directions.LEFT) {
    x = end;
  } else if (videoPosition <= end + 100 && direction === Directions.RIGHT) {
    x = -end;
  } else if (
    videoPosition >= -lastMove - 100 &&
    videoPosition <= -lastMove + 100 &&
    direction === Directions.LEFT &&
    hasAddidionalvideos
  ) {
    x = lastMove;
  } else if (
    videoPosition >= end + lastMove - 100 &&
    videoPosition <= end + lastMove + 100 &&
    direction === Directions.RIGHT &&
    hasAddidionalvideos
  ) {
    x = -lastMove;
  }

  return x;
};
