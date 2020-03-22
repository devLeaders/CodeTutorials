import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { connect } from "react-redux";

import { ButtonTypes } from "../../enums";
// import toggleOnClick from "../../actions/runVideoAction";
import { playPauseVideo, videoResize } from "../../actions/videoPlayerActions"

const Wrapper = styled.div.attrs((props: { small: string, type: string }): any => ({
  position: props.small === "small" ? "absolute" : "",
  left: props.small && props.type === ButtonTypes.PLAY ? "50%" : "0",
  top: props.type === ButtonTypes.PLAY && props.small ? "50%" : "0"
}))`
  position: ${props => props.position};
  left: ${props => props.left};
  top:${props => props.top};
  transform: ${props => props.type === ButtonTypes.PLAY && props.small ? "translate(-50%, -50%)" : ""};
  padding: 3px;
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
  movie: {
    isPaused: boolean;
    isMinimized: boolean;
    isFullscreen: boolean;
  };
  play: any;
  small?: any
  toogleFullscreen?: any;
  toogleSmallMode?: any;
}

const VideoPlayerButton: React.SFC<VideoPlayerButton> = props => {
  const { videoRef, videoContainerRef, mainImg, afterClickImg, type, small } = props;
  const { isFullscreen, isPaused, isMinimized } = props.movie;
  const [isClicked, setIsClicked] = useState(true);

  const handleToogleButton = () => {
    const video = videoRef.current;
    if (type === ButtonTypes.PLAY) {
      props.play();
      //function that plays and pause video
      playPauseVideo(video, isPaused);
    } else if (type === ButtonTypes.MUTE) {
      video.muted = isClicked;
    } else if (type === ButtonTypes.FULLSCREEN) {
      props.toogleFullscreen();
      //function that toggles fullscreen
      videoResize(videoContainerRef, isFullscreen);
      console.log(isFullscreen)
    } else if (ButtonTypes.SMALL_MODE) {
      if (isFullscreen) {
        props.toogleFullscreen();
        videoResize(videoContainerRef, isFullscreen);
      }
      props.toogleSmallMode();
    }

    // toggleOnClick(isClicked, setIsClicked, type);
  };

  const typeCheck = () => {
    if (type === ButtonTypes.PLAY) {
      return isPaused
    } else if (type === ButtonTypes.SMALL_MODE) {
      return !isMinimized
    } else if (type === ButtonTypes.FULLSCREEN) {
      return !isFullscreen
    } else {
      return isClicked
    }
  }

  const startStopImg = typeCheck() ?
    (<Img src={mainImg} alt={type} />) :
    (<Img src={afterClickImg} alt={type} />);

  return (
    <Wrapper small={small} type={type}>
      <ToogleButton onClick={handleToogleButton}>
        {startStopImg}
      </ToogleButton>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    play: () => { dispatch({ type: "play" }); },
    toogleFullscreen: () => { dispatch({ type: "fullscreen" }); },
    toogleSmallMode: () => { dispatch({ type: "smallMode" }); }
  };
};
const mapStateToProps = (state: any) => {
  return { movie: state.movie };
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerButton);
