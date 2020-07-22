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

class Slide extends React.Component<SlideProps, SlideState> {
  state = {
    videoPosition: 0,
    margin: 0,
  };

  private _isAnimating: boolean = false;

  private _handleResize = () => {
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

  private _animate = (
    elements: Array<HTMLDivElement>,
    move: number,
    time: number
  ) => {
    if (!this._isAnimating) {
      TweenLite.to(elements, time, {
        x: "+=" + move,
        ease: Power3.easeOut,
        onStart: () => {
          this._isAnimating = true;
        },
        onComplete: () => {
          this._isAnimating = false;
        },
      });
      this.setState((prevState: SlideState) => {
        return { videoPosition: prevState.videoPosition + move };
      });
    }
  };

  protected handleMove = (e: any) => {
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
    const hasAddidionalvideos  = additionalVideosNum !== 0 ? true : false
    let x = e.target.name === Directions.RIGHT ? -move : move;
    

    x = _calcMove(e.target.name, videoPosition, lastMove, end, hasAddidionalvideos, x)
    let time = Math.abs(x) === Math.abs(end) ? 1 : 0.6;

    this._animate(gsapMovies, x, time);
  };

  componentDidMount() {
    const { gsapMovies, videoWrapperRef } = this.props;
    window.addEventListener("resize", this._handleResize);
    const margin = calcMargins(
      gsapMovies[0].offsetWidth,
      videoWrapperRef.current.offsetWidth
    );
    this.setState({ margin });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._handleResize);
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


const _calcMove = (
  direction: string,
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
    console.log("ok");
    x = -lastMove;
  }

  return x;
};
