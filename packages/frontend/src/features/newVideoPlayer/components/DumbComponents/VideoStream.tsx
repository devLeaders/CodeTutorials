import React from "react";
import { IVideoProps } from "../../models/video.type";
import { VideoPlayer } from "../../styles/video.styles";

const VideoStream = React.forwardRef<HTMLVideoElement, IVideoProps>(({ togglePlay }, ref) => (
  <VideoPlayer onClick={togglePlay} ref={ref}>
    <source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4' />
  </VideoPlayer>
));

export default VideoStream;
