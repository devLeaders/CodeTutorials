import React, { useRef } from "react";

import Slide from "../../providers/Slide";
import { RenderProps } from "../../providers/Slide";
import Slider from "./Slider";

const SliderContainer: React.SFC = () => {
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const gsapMovies: Array<HTMLDivElement> = [];

  return (
    <Slide
      gsapMovies={gsapMovies}
      videoWrapperRef={videoWrapperRef}
      render={({ handleMove, margin }: RenderProps) => (
        <Slider
          handleMove={handleMove}
          margin={margin}
          gsapMovies={gsapMovies}
          videoWrapperRef={videoWrapperRef}
        />
      )}
    />
  );
};

export default SliderContainer;
