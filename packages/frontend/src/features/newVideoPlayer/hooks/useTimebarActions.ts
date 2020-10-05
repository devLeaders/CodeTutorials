import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setVideoTime } from "../../../config/redux/newVideoPlayer/actions";
import { refsStore } from "../utils/refs.store";
import { VideoPlayerName } from "../utils/VideoPlayerEnum";
import { useMovieState } from "./useMovieState";


export const useTimeBarActions = (
  timebarRefInner: React.MutableRefObject<HTMLDivElement | null>,
  timebarRefContainer: React.MutableRefObject<HTMLDivElement | null>,
  name: VideoPlayerName
) => {
  const { isMinimized, videoTime } = useMovieState();
  const dispatch = useDispatch();
  const [videoProgress, setVideoProgress] = useState<string>('')

  const handleTimeProgress = useCallback(() => {
      const { videoDuration, currentTime } = refsStore[name].current;
      const time = (currentTime / videoDuration ) * 100 + "%"
      setVideoProgress(time)
   
  }, []);

  const handleUpdateTime = useCallback((e: MouseEvent) => {
    const { videoDuration, setCurrentTime } = refsStore[name].current;
    if ((e.target === timebarRefInner.current || e.target === timebarRefContainer.current) &&
    timebarRefInner.current && timebarRefContainer.current && videoDuration ) {

      const mousePosition = e.offsetX;
      const timeBarWidth = timebarRefContainer.current.offsetWidth;
      const time = (mousePosition / timeBarWidth) * videoDuration;
      setCurrentTime(time);
    };
    }, []);

  useEffect(() => {
    window.addEventListener("mouseup", handleUpdateTime);
    return () => {
      window.removeEventListener("mouseup", handleUpdateTime);
    };
  });

  useEffect(() => {
    if(refsStore[name]) handleTimeProgress();
  });

  return { videoProgress }
};
