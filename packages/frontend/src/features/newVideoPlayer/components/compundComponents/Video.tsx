import React, { useRef, useImperativeHandle,forwardRef, useEffect } from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import { VideoPlayer } from "../../styles/video.styles";

const Video = forwardRef((props: unknown, ref: any) => {
  const { actions:{ playPause, handleTimeProgressions, handleKeyActions, handleMouseOver }, state: {isMinimized} } = useVideoPlayerContext();
  const videoRef = useRef<HTMLVideoElement | null>(null);


  useImperativeHandle(ref.videoData, () => ({
    play: () => {videoRef.current?.play()},
    pause: () => {videoRef.current?.pause()},
    toggleMuted: (isMuted: boolean) => {videoRef.current!.muted = isMuted},
    reqFullscreen: () => {ref.containerRef.current.requestFullscreen()},
    setCurrentTime: (time: number) => {videoRef.current!.currentTime = time},
    paused: videoRef.current?.paused,
    muted: videoRef.current?.muted,
    currentTime: videoRef.current?.currentTime,
    videoDuration: videoRef.current?.duration,
  }));

  
  useEffect(() => {
    document.addEventListener('mouseover', (e) => handleMouseOver(e, videoRef));
    document.addEventListener('keydown', handleKeyActions);
    return () => {
      document.removeEventListener('mouseover',(e) => handleMouseOver(e, videoRef));
      document.removeEventListener('keydown', handleKeyActions);
    };
  }, [handleMouseOver, isMinimized]);


  return (
    <VideoPlayer
      onClick={playPause}
      ref={(el) => {videoRef.current = el}}
      onTimeUpdate={handleTimeProgressions}
    >
      <source
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
      />
    </VideoPlayer>
  );
});

export default Video;
