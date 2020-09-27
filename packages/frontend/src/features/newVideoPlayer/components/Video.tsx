import React from "react";
import styled from "styled-components";

const Video: React.FC = () => {
  return (
    <video>
      <source src='http://localhost:3300/videos/video' type='video/mp4'></source>
    </video>
  );
};
export default Video;
