import React, { useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux"

import { refsStore } from "./refs.store"
import { breakPoint } from "../../../utils/breakPoint";
import Player from "./VideoPlayer"
import Interface from "./interface"
import { getMovieState } from "../../actions/ReduxActions"
import { SmallInterface } from "./SmallModeInterface"
import { VideoPlayer } from "./VideoPlayer"
import { device } from "../../../constans/device"



const VideoPlayerContainer = styled.div<{ minimized: boolean }>`
  position: ${props => props.minimized ? "fixed" : "relative"};
  right: ${props => props.minimized ? "0" : "0"};
  bottom: ${props => props.minimized ? "0" : "0"};
  max-height: ${props => props.minimized ? "120px" : ""};
  max-width: ${props => props.minimized ? "200px" : ""};
  overflow: hidden;
  max-height: 700px;
  background-color: #222;
  &:hover ${VideoPlayer}{
    filter: ${props => props.minimized ? "brightness(0.5)" : ""};
  }
  &:hover ${SmallInterface} {
      visibility: visible;
      opacity: 1;
  }
  &:hover {
    .interfaceWrapper {
        transform: translateY(0);
        @media ${device.TABLET} {
          transform: translateY(0);
        }
    }
  }
  @media ${device.TABLET} {
        background-color: grey; 
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
      <Player />
      <Interface />
    </VideoPlayerContainer >
  );
};

export default VideoPlayerComponent;
