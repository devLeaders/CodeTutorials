import React, { ReactNode } from "react";
import styled from "styled-components";

interface IDumbVideo {
  togglePlay(): void;
  state: {
    isPaused: boolean;
  };
}

const Video: React.FC = (props) => {
  // const { togglePlay } = props;

  return (
    <video>
      <source src='http://localhost:3300/videos/video' type='video/mp4'></source>
    </video>
  );
};

export default Video;
