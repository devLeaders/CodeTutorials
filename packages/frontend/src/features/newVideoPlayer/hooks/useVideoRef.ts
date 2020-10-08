import { useCallback } from "react";
import { refsStore } from "../utils/refs.store";
import { TimeToSkip, VideoPlayerName } from "../utils/VideoPlayerEnum";

export const useVideoRef = (name: VideoPlayerName) => {

  const togglePlay = useCallback((isPaused: boolean) => {
    const { play, pause } = refsStore[name].current;
    isPaused ? play() : pause();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMute = useCallback((isMuted: boolean) => {
    const { toggleMuted } = refsStore[name].current;
    toggleMuted(!isMuted);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleFullscreen = useCallback((isFullscreen: boolean) => {
    const { reqFullscreen } = refsStore[name].current;
    isFullscreen ?  document.exitFullscreen() : reqFullscreen();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setVideoTime = useCallback((newTime:number) => {
    const { setCurrentTime } = refsStore[name].current;
    setCurrentTime(newTime);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rewindVideo = useCallback(() => {
    const { setCurrentTime, currentTime } = refsStore[name].current;
    const newTime = currentTime - TimeToSkip.TIME;
    setCurrentTime(newTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const forwardVieo = useCallback(() => {
    const { setCurrentTime, currentTime, videoDuration } = refsStore[name].current;
    const timeToEnd = videoDuration - currentTime;
    if( timeToEnd > TimeToSkip.TIME) {
      const newTime = currentTime + TimeToSkip.TIME;
      setCurrentTime(newTime);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    togglePlay,
    toggleMute,
    toggleFullscreen,
    setVideoTime,
    rewindVideo,
    forwardVieo
  };
};
