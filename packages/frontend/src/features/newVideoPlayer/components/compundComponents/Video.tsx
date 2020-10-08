import { debounce } from "lodash";
import React, { useRef, useImperativeHandle,forwardRef, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import { Navigation } from "../../../../config/routing/NavigationPath";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import { VideoPlayer } from "../../styles/video.styles";
import { VideoPlayerName } from "../../utils/VideoPlayerEnum";

const Video = forwardRef((props: unknown, ref: any) => {
  const { actions:{ playPause, handleTimeProgressions, handleKeyActions, handleMouseOver, setFullscreen }, state: {isMinimized}, name  } = useVideoPlayerContext();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const location = useLocation();
  const isMainScreen = name === VideoPlayerName.BIG && (location.pathname === Navigation.HOME)
  

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
    document.addEventListener('mouseover', debounce((e) => handleMouseOver(e, videoRef), 100));
    document.addEventListener('keydown', handleKeyActions);
    return () => {
      document.removeEventListener('mouseover',debounce((e) => handleMouseOver(e, videoRef), 100));
      document.removeEventListener('keydown', handleKeyActions);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleMouseOver, isMinimized]);



  return (
    <VideoPlayer
      onClick={playPause}
      ref={(el) => {videoRef.current = el}}
      onTimeUpdate={handleTimeProgressions}
      autoPlay={isMainScreen}
      muted={isMainScreen}
    >
      <source
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
      />
    </VideoPlayer>
  );
});

export default Video;
