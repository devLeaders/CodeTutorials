import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { refsStore } from "../utils/refs.store";
import { VideoPlayerName } from "../utils/VideoPlayerEnum";
import { useMovieState } from "./useMovieState";

enum Etype {
  MOUSE_MOVE = 'mousemove',
  MOUSE_CLICK = 'mouseclick',
  MOUSE_DOWN = 'mousedown',
  MOUSE_UP = 'mouseup',
}
export const useTimeBarActions = (
  timebarRefInner: React.MutableRefObject<HTMLDivElement | null>,
  timebarRefContainer: React.MutableRefObject<HTMLDivElement | null>,
  name: VideoPlayerName
) => {
  const [videoProgress, setVideoProgress] = useState<string>('');
  const [mouseDown, setMouseDown] = useState(false);

  const handleTimeProgress = useCallback(() => {
    const { videoDuration, currentTime } = refsStore[name].current;
    const time = (currentTime / videoDuration ) * 100 + "%"
    setVideoProgress(time)

}, []);

  const handleMouseUpDown = (e: any) => {
      if (timebarRefInner.current === e.target || timebarRefContainer.current === e.target) {
        if (e.type === Etype.MOUSE_UP) {
          setMouseDown(false);
        } else {
          setMouseDown(true);
        }
      }
  }

  const handleMouseMoveAndClick = (e: any) => {
      if (timebarRefInner.current === e.target || timebarRefContainer.current === e.target) {
        console.log(e.type)
        if (e.type === Etype.MOUSE_CLICK) {
          handleUpdateTime(e);
        } else if (e.type === Etype.MOUSE_MOVE && mouseDown) {
          console.log(e.type, mouseDown)
          handleUpdateTime(e, Etype.MOUSE_MOVE);
        };
      };
    };

  const handleUpdateTime = (e: MouseEvent, type?:string ) => {
    const { videoDuration, setCurrentTime } = refsStore[name].current;
    if ((e.target === timebarRefInner.current || e.target === timebarRefContainer.current) &&
    timebarRefInner.current && timebarRefContainer.current && videoDuration ) {
      const mousePosition = e.offsetX;
      const timeBarWidth = timebarRefContainer.current.offsetWidth;
      const distanceFromLeft = timebarRefContainer.current.getBoundingClientRect().left
      const time = type
      ? ((mousePosition - distanceFromLeft) / timeBarWidth) * videoDuration
      : (mousePosition / timeBarWidth) * videoDuration;
      setCurrentTime(time);
    };
  }

  useEffect(() => {
    window.addEventListener("mousemove", debounce(handleMouseMoveAndClick, 250));
    window.addEventListener("mouseup", debounce(handleMouseUpDown, 250));
    return () => {
      window.removeEventListener("mousemove", debounce(handleMouseMoveAndClick, 250));
      window.removeEventListener("mouseup", debounce(handleMouseUpDown, 250));
    };
  });

  useEffect(() => {
    if(refsStore[name]) handleTimeProgress();
  });

  return { videoProgress }
};
