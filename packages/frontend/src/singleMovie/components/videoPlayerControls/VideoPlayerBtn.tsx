import React from "react";
import styled from "styled-components";
import { useState } from "react";

import { ButtonTypes } from "../../enums";
import toggleOnClick from "../../actions/handleToggleOnClick";
import handlePlay from "../../actions/handlePlay";

const Wrapper = styled.div`
  padding: 3px;
  background: none;
  display: flex;
  align-content: center;
`;

const ToogleButton = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  outline: 0;
`;

const Img = styled.img`
  height: 35px;
  width: 32px;
`;

export interface VideoPlayerButton {
  videoRef: any;
  videoContainerRef: any;
  mainImg: string;
  afterClickImg: string;
  type: any;
  setIsPaused?: any;
  isPaused?: boolean;
  isMinimized?: any;
  setIsMinimized?: any;
}

const VideoPlayerButton: React.SFC<VideoPlayerButton> = props => {
  const {
    videoRef,
    videoContainerRef,
    mainImg,
    afterClickImg,
    type,
    isPaused,
    setIsPaused,
    isMinimized,
    setIsMinimized
  } = props;
  const [isClicked, setIsClicked] = useState(true);

  const handleToogleButton = () =>
    toggleOnClick(
      isClicked,
      setIsClicked,
      videoRef,
      videoContainerRef,
      type,
      isPaused,
      setIsPaused,
      isMinimized,
      setIsMinimized
    );

  const startStopImg = isClicked ? (
    <Img src={mainImg} alt={type} />
  ) : (
    <Img src={afterClickImg} alt={type} />
  );

  const startStopImgPlay = isPaused ? (
    <Img src={mainImg} alt={type} />
  ) : (
    <Img src={afterClickImg} alt={type} />
  );
  return (
    <Wrapper>
      <ToogleButton onClick={handleToogleButton}>
        {isPaused === undefined ? startStopImg : startStopImgPlay}
      </ToogleButton>
    </Wrapper>
  );
};

export default VideoPlayerButton;
