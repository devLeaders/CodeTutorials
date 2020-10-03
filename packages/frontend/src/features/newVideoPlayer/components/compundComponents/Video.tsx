import React, { useEffect, useRef, useImperativeHandle } from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import { IVideo } from "../../models/video.type";
import { VideoPlayer } from "../../styles/video.styles";
import { refsStore } from "../../utils/refs.store";
import VideoStream from "../DumbComponents/VideoStream";

const Video = React.forwardRef((props: any, ref: any) => {
  const { actions:{togglePlay}, state: {isMuted} } = useVideoPlayerContext();
  const videoRef = useRef<any>(null);

  useEffect(() => {
    
  },[])
  
  React.useImperativeHandle(ref, () => ({
    play: () => {videoRef.current.play()},
    pause: () => {videoRef.current.pause()},
    toggleMuted: (isMuted: boolean) => videoRef.current.muted = isMuted
  }),[isMuted]);


  return (
    <VideoPlayer
      onClick={togglePlay}
      ref={(el) => {
        videoRef.current = el;
      }}
    >
      <source
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
      />
    </VideoPlayer>
  );
});

export default Video;
