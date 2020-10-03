import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideoTime } from "../../../config/redux/newVideoPlayer/actions";
import { updateTime } from "../actions/updateTime";
import { IMovieState } from "../models/video.type";

export const useTimeBarActions = (
  timebarRefInner: React.MutableRefObject<HTMLDivElement | null>,
  timebarRefContainer: React.MutableRefObject<HTMLDivElement | null>
) => {
  const { isMinimized, videoTime } = useSelector((state: IMovieState) => state.newMovie);
  const dispatch = useDispatch();

  // const handleUpdateTime = useCallback(
  //   (e: any) => {
  //     const newVideoTime = updateTime(isMinimized, e, timebarRefInner, timebarRefContainer, videoTime);
  //     return dispatch(setVideoTime(newVideoTime));
  //   },
  //   [videoTime, isMinimized, setVideoTime]
  // );

  // useEffect(() => {
  //   window.addEventListener("mouseup", handleUpdateTime);
  //   return () => {
  //     window.removeEventListener("mouseup", handleUpdateTime);
  //   };
  // });
};
