import React, { useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux"

import { refsStore } from "./refs.store"
import { breakPoint } from "../../../utils/breakPoint";
import VideoPlayer from "./VideoPlayer"
import Interface from "./interface"
import { getMovieState } from "../../actions/ReduxActions"



const VideoPlayerContainer = styled.div<{ minimized: boolean }>`
  position: ${props => props.minimized ? "fixed" : "relative"};
  right: ${props => props.minimized ? "30px" : ""};
  bottom: ${props => props.minimized ? "10px" : ""};
  max-height: ${props => props.minimized ? "200px" : ""};
  max-width: ${props => props.minimized ? "300px" : ""};
  overflow: hidden;
  @media screen and (min-width: ${breakPoint.desktop}) {
    flex-direction: row;
    width: 60%;
  }
  &:hover {
    .small {
      visibility: visible;
      opacity: 1;
    }
  }
  &:hover {
    .interfaceWrapper {
      transform: translateY(0)
    }
  }

  
`;

const VideoPlayerComponent: React.SFC = () => {
  const isMinimized: boolean = useSelector(state => getMovieState(state).isMinimized)
  const videoContainerRef: any = useRef();
  refsStore.Refs[1] = videoContainerRef;

  return (
    <VideoPlayerContainer
      ref={videoContainerRef}
      minimized={isMinimized}
    >
      <VideoPlayer />
      <Interface />
    </VideoPlayerContainer >
  );
};

export default VideoPlayerComponent;
