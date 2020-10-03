import { setBigIsPaused } from "./../../../config/redux/newVideoPlayer/actions";
import { useSelector, useDispatch } from "react-redux";

import { VideoPlayerName } from "./../utils/VideoPlayerEnum";
import { IMovieState } from "./../models/video.type";
import { useVideoRef } from "./useVideoRef";

export const useVideoActions = (name: VideoPlayerName) => {
  const dispatch = useDispatch();
  const state = useSelector((state: IMovieState) => state.newMovie);
  const { togglePlay } = useVideoRef(name);
  const { bigIsPaused, smallIsPaused } = state;

  const playPause = () => {
    console.log("ok");
    const paused = name === VideoPlayerName.BIG ? bigIsPaused : smallIsPaused;
    togglePlay(paused);
    console.log(paused);
    dispatch(setBigIsPaused());
  };


  const actions = {
      playPause
  }

  return {
    actions,
    state,
  };
};
