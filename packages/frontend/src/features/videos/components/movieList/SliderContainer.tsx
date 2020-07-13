import React, { useRef } from "react";
import styled from "styled-components";

import { Colors } from "../../../common/styles/constans/Colors";
import { Device } from "../../../common/styles/constans/Device";
import { FontSize } from "../../../common/styles/constans/FontSize";
import { fontWeight} from "../../../common/styles/constans/fontWeight";
import Slide from "../../providers/Slide";
import { RenderProps } from "../../providers/Slide";
import Slider from "./Slider";

const Wrapper = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
  padding: 5px 0 0 0;
  position: relative;
  @media ${Device.TABLET}{
    margin-bottom: 62px;
  }
`;

const Title = styled.h2`
  font-size: ${FontSize.MEDIUM};
  font-weight: ${fontWeight.BOLD};
  margin-left: 70px;
  margin-bottom: 19px;
  align-self: flex-start;
  @media ${Device.LAPTOP}{
    font-size: ${FontSize.BIG};
  }
`;

interface SliderContainerProps {
  title: string;
}

const SliderContainer: React.SFC<SliderContainerProps> = ({ title }) => {
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const gsapMovies: Array<HTMLDivElement> = [];

  return (
    <Wrapper>
      <Title>{title}</Title>
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
    </Wrapper>
  );
};

export default SliderContainer;
