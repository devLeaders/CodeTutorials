import { useState, useEffect, useCallback } from "react";
import { useSelector, RootStateOrAny } from "react-redux";

import { runVideoAction, changeVideoTime, handleVideoShortcuts, changeIsFullscreen } from "./videoActionController";
import { setTime, changeState } from "../../../config/redux/videoPlayer/actions";
import { playPauseVideo } from "../actions/videoPlayerActions";
import { getMovieState } from "../actions/ReduxActions";
import { ButtonTypes, Keys } from "../enums";
import { refsStore } from "../refs.store";

export enum EType {
  MOUSE_DOWN = "mousedown",
  MOUSE_UP = "mouseup",
  MOUSE_MOVE = "mousemove",
  MOUSE_CLICK = "click",
}

//button click events
export const useClickHandler = (btnType: string, videoState: boolean, small?: string) => {
  return () => runVideoAction(btnType, videoState, small);
};
interface ITimeBar {
  current: HTMLDivElement | null;
}

//timeBar Actions
export const useTimeBarAction = (TimeBarRef: ITimeBar, small: string | undefined) => {
  const [mouseDown, setMouseDown] = useState(false);
  const handleMouseUpDown = useCallback(
    (e: any) => {
      if ((TimeBarRef.current || refsStore.VideoRefs[1]) === e.target) {
        checkIsMouseDown(e.type);
      }
    },
    [setMouseDown]
  );

  const checkIsMouseDown = useCallback(
    (eventType: string) => {
      if (eventType === EType.MOUSE_DOWN) {
        setMouseDown(true);
      } else if (eventType === EType.MOUSE_UP) {
        setMouseDown(false);
      }
    },
    [setMouseDown]
  );

  const handleMouseMoveAndClick = useCallback(
    (e: any) => {
      if ((TimeBarRef.current || refsStore.VideoRefs[1]) === e.target) {
        if (e.type === EType.MOUSE_CLICK) {
          changeVideoTime(e, TimeBarRef, small);
        } else if (e.type === EType.MOUSE_MOVE && mouseDown) {
          changeVideoTime(e, TimeBarRef, EType.MOUSE_MOVE, small);
        }
      }
    },
    [mouseDown, small, TimeBarRef]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMoveAndClick);
    window.addEventListener("mouseup", handleMouseUpDown);
    return () => {
      window.removeEventListener("mousemove", handleMouseMoveAndClick);
      window.removeEventListener("mouseup", handleMouseUpDown);
    };
  });

  return {
    handleMouseUpDown,
    mouseDown,
    handleMouseMoveAndClick,
  };
};
type VideoRefType = HTMLVideoElement | null;

//video player actions
export const useVideoPlayerActions = (videoRef: VideoRefType, small?: string) => {
  const videoState: RootStateOrAny = useSelector((state) => getMovieState(state));
  const paused = small ? videoState.smallIsPaused : videoState.isPaused;

  const handleTimeProgress = useCallback(() => {
    const video = videoRef;
    const time = video ? (video.currentTime / video.duration) * 100 : 0;
    setTime(time, small);
  }, [videoRef, small]);

  const handleVideoClick = useCallback(() => {
    if (videoRef) {
      changeState(ButtonTypes.PLAY, small);
      playPauseVideo(videoRef, paused);
    }
  }, [videoRef, paused, small]);

  const handleFullscreenChange = useCallback(() => {
    changeIsFullscreen(small);
  }, [small]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (videoRef) {
        let reduxAction;
        const key = e.keyCode;
        if (key === Keys.SPACE || key === Keys.LEFT || key === Keys.RIGHT) {
          reduxAction = () => changeState(ButtonTypes.PLAY);
          handleVideoShortcuts(e, reduxAction, videoState);
        }
      }
    },
    [videoRef, videoState, handleVideoShortcuts]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [paused]);

  return {
    handleTimeProgress,
    handleFullscreenChange,
    handleVideoClick,
  };
};
