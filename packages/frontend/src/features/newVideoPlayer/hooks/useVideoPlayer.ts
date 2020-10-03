import { S_IFREG } from "constants";
import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { minimizeVideo } from "../../../config/redux/newVideoPlayer/actions";

import { refsStore } from "../utils/refs.store";

export const useVideoPlayer = (name:string) => {
  const dispatch = useDispatch();

  const togglePlay = useCallback(() => {
    const { play, pause } = refsStore[name];
    // isPaused ? play() : pause();

  }, []);

  const toggleMute = useCallback(() => {
    // const { toggleMuted } = refsStore.bigVideoPlayerRef.current;
    // toggleMuted(!isMuted);

  }, []);

  const toggleFullscreen = useCallback(() => {
    // const {toggleFullscreen} = refsStore.bigVideoPlayerRef.current;
    // isFullscreen ?  document.exitFullscreen() :toggleFullscreen();

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
