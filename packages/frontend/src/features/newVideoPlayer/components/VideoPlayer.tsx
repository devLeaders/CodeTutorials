import React, { ReactNode } from "react";
import styled from "styled-components";
import VideoContainer from "./VideoContainer";

interface IVideoContainer {
  VideoContainer: React.PropsWithChildren<{}>;
}
interface IVideoPlayer {
  children: ReactNode;
}

const VideoPlayer: React.FC<IVideoPlayer> & IVideoContainer = ({ children }) => {
  VideoPlayer.VideoContainer = VideoContainer;
  return children;
};

export default VideoPlayer;
