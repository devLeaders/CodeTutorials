import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { minimizeVideo } from "../../../config/redux/newVideoPlayer/actions";

import { refsStore } from "../utils/refs.store";
import { VideoPlayerName } from "../utils/VideoPlayerEnum";

export const useVideoRef = (name: VideoPlayerName) => {
  const dispatch = useDispatch();

  const togglePlay = useCallback((isPaused: boolean) => {
    const { play, pause } = refsStore[name].current;
    isPaused ? play() : pause();
  }, []);

  const toggleMute = useCallback((isMuted: boolean) => {
    const { toggleMuted } = refsStore[name].current;
    toggleMuted(!isMuted);
  }, []);

  const toggleFullscreen = useCallback((isFullscreen: boolean) => {
    const {toggleFullscreen} = refsStore[name].current;
    isFullscreen ?  document.exitFullscreen() :toggleFullscreen();
  }, []);

  const toggleMinimize = () => {
    dispatch(minimizeVideo());
  };

  return {
    togglePlay,
    toggleMute,
    toggleFullscreen,
    toggleMinimize
  };
};
