import React, { ReactNode } from "react";

import {VideoPlayer} from "../../styles/video.styles"

interface IVideoProps {
  togglePlay(): void;
  state: {
    isPaused: boolean;
  };
  children: ReactNode
}



const Video: React.FC<any> = ({state, togglePlay, children}) => {
  return (
    <VideoPlayer onClick={togglePlay}>
      <source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4'></source>
    </VideoPlayer>
  );
};

export default Video;
