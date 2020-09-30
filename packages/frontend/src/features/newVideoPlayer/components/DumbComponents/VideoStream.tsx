import React from "react";
import { IVideoProps } from "../../models/video.type";
import { VideoPlayer } from "../../styles/video.styles";

const VideoStream = React.forwardRef<HTMLVideoElement, IVideoProps>(({ handleTogglePlay, handleTimeProgress }, ref) => (
  <VideoPlayer onClick={handleTogglePlay} ref={ref} onTimeUpdate={handleTimeProgress}>
    <source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4' />
  </VideoPlayer>
));

export default VideoStream;
