import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFullscreen, minimizeVideo, setVideoTime } from "../../../config/redux/newVideoPlayer/actions";
import { handleToggleMute } from "../actions/handleToggleMute";
import { togglePlay } from "../actions/togglePlay";
import { handleVideoFullscreen } from "../actions/handleVideoFullscreen";
import { getVideoTime } from "../actions/getVideoTime";
import { handleKeyActions } from "../actions/handleKeyActions";
import { IMovieState } from "../models/video.type";

export const useVideoPlayerActions = () => {
  const { isFullscreen, isMinimized, videoTime } = useSelector((state: IMovieState) => state.newMovie);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleVideoStatus = useCallback(
    (isPaused: boolean) => {
      togglePlay(isPaused, isMinimized);
      return setIsPaused(!isPaused);
    },
    [isMinimized, isPaused]
  );

  const handleTogglePlay = useCallback(() => {
    handleVideoStatus(isPaused);
  }, [isPaused, videoTime]);

  const toggleMute = useCallback(() => {
    handleToggleMute(isMuted, isMinimized);
    return setIsMuted(!isMuted);
  }, [isMuted]);

  const toggleFullscreen = useCallback(() => {
    handleVideoFullscreen(isFullscreen, isMinimized);
    return dispatch(handleFullscreen());
  }, [isFullscreen]);

  const toggleMinimize = useCallback(() => {
    handleVideoStatus(false);
    return dispatch(minimizeVideo());
  }, [dispatch]);

  const handleTimeProgress = useCallback(() => {
    const time = getVideoTime(isMinimized, videoTime);
    dispatch(setVideoTime(time));
  }, [isMinimized]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      handleKeyActions(e, videoTime, isMinimized, handleVideoStatus, toggleMute, handleTogglePlay);
    },
    [isMinimized, handleVideoStatus, toggleMute, handleTogglePlay, isPaused]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const actions = {
    handleTogglePlay,
    toggleMute,
    toggleFullscreen,
    handleTimeProgress,
    toggleMinimize,
  };

  const state = {
    isPaused,
    isMuted,
    videoTime,
    isMinimized,
    isFullscreen,
  };

  return {
    actions,
    state,
  };
};
