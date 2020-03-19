import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { connect } from "react-redux";

import { ButtonTypes } from "../../enums";
import toggleOnClick from "../../actions/handleToggleOnClick";
import { type } from "os";
import { playPauseVideo } from "../../actions/playPauseVideo";
import { videoResize } from "../../actions/videoResize";
import toggleonClick from "../../actions/handleToggleOnClick";

const Wrapper = styled.div.attrs((props: { small: string, type: "string" }): any => ({
  position: props.small ? "absolute" : "",
  left: props.small ? "0" : "",
  top: props.small ? "0" : "",
}))`
  position: ${props => props.position};
  left: ${props => props.type === ButtonTypes.SMALL_MODE ? props.left : "50%"};
  top: ${props => props.type === ButtonTypes.SMALL_MODE ? props.top : "50%"};
  transform: ${props => props.type === ButtonTypes.PLAY && props.small ? "translate(-50%, -50%)" : ""};
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
  const video = videoRef.current;

  const handleToogleButton = () => {
    const video = videoRef.current;
    const videoContainer = videoContainerRef.current;
    if (type === ButtonTypes.PLAY) {
      props.play();
      //function that plays and pause video
      playPauseVideo(video, isPaused);
    } else if (type === ButtonTypes.MUTE) {
      video.muted = isClicked;
    } else if (type === ButtonTypes.FULLSCREEN) {
      props.toogleFullscreen();
      //function that toggles fullscreen
      videoResize(videoContainerRef, isClicked);
    } else if (ButtonTypes.SMALL_MODE) {
      props.toogleSmallMode();
    }

    toggleOnClick(isClicked, setIsClicked, type);
  };

  const startStopImg = isClicked ?
    (<Img src={mainImg} alt={type} />) :
    (<Img src={afterClickImg} alt={type} />);

  const startStopImgPlay = isPaused ?
    (<Img src={mainImg} alt={type} />) :
    (<Img src={afterClickImg} alt={type} />);

  return (
    <Wrapper small={small} type={type}>
      <ToogleButton onClick={handleToogleButton}>
        {type === "play" ? startStopImgPlay : startStopImg}
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
