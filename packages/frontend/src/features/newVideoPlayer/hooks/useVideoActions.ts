import {  useState } from "react";
import { useDispatch } from "react-redux";
import { setBigIsPaused, setSmallIsPaused, setMuteUnmute, handleFullscreen, minimizeVideo, setVideoTime } from "./../../../config/redux/newVideoPlayer/actions";
import { VideoPlayerName } from "./../utils/VideoPlayerEnum";
import { useVideoRef } from "./useVideoRef";
import { refsStore } from "../utils/refs.store";
import { useMovieState } from "./useMovieState";
import { Keys } from "../utils/enums";

export const useVideoActions = (name: VideoPlayerName) => {
  const dispatch = useDispatch();
  const state = useMovieState();
  const [mouseOver, setIsMousedOver] = useState<boolean>(false)
  const { togglePlay, toggleMute, toggleFullscreen, forwardVieo, rewindVideo } = useVideoRef(name);
  const { bigIsPaused, smallIsPaused, isMuted, isFullscreen } = state;

  const playPause = () => {
    const paused = name === VideoPlayerName.BIG ? bigIsPaused : smallIsPaused;
    const reduxAction = name === VideoPlayerName.BIG ? setBigIsPaused() : setSmallIsPaused();
    togglePlay(paused);
    dispatch(reduxAction);
  };

  const muteUnmute = () => {
    toggleMute(isMuted);
    dispatch(setMuteUnmute());
  };

  const setFullscreen = () => {
    toggleFullscreen(isFullscreen);
    dispatch(handleFullscreen());
  };

  const handleMinimize = () => {
    const paused = name === VideoPlayerName.BIG ? bigIsPaused : smallIsPaused;
    const reduxAction = name === VideoPlayerName.BIG ? setSmallIsPaused(): setBigIsPaused() ;
    if(!paused) {
      togglePlay(paused);
      dispatch(reduxAction);
    };
    dispatch(minimizeVideo());
  };

  const handleTimeProgressions = () => {
    const { currentTime } = refsStore[name].current;
    dispatch(setVideoTime(currentTime));
  };

  const handleMouseOver = (e:MouseEvent, ref:{ current: HTMLVideoElement }) => {
    const target = e.target;
    if(target ===  ref.current) {
       return setIsMousedOver(true);
    } else setIsMousedOver(false);
  };

  const handleKeyActions = (e: KeyboardEvent) => {
    const key = e.key;
      if(refsStore[name] && mouseOver) {
        switch (key) {
          case Keys.MUTE: { 
            return muteUnmute();
          };
          case Keys.PLAY_PAUSE: { 
            e.preventDefault();
            return playPause();
          };
          case Keys.SKIP_FORWARD: { 
            return forwardVieo();
          };
          case Keys.REWIND: { 
            return rewindVideo();
          };
          case Keys.EXIT: { 
            return dispatch(handleFullscreen());
          };
        };
      };
  };

  const actions = {
      playPause,
      muteUnmute,
      setFullscreen,
      handleMinimize,
      handleTimeProgressions,
      handleKeyActions,
      handleMouseOver
  }
 
  return {
    actions,
    state,
  };
};
