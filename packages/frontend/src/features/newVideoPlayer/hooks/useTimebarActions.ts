import { useCallback, useEffect, useState, MouseEvent } from "react";
import { Etype } from "../utils/enums";
import { refsStore } from "../utils/refs.store";
import { VideoPlayerName } from "../utils/VideoPlayerEnum";

export const useTimeBarActions = (
  timebarRefInner: React.MutableRefObject<HTMLDivElement | null>,
  timebarRefContainer: React.MutableRefObject<HTMLDivElement | null>,
  name: VideoPlayerName
) => {
  const [videoProgress, setVideoProgress] = useState<string>('');
  const [mouseDown, setMouseDown] = useState(false);

  const handleTimeProgress = useCallback(() => {
    const video = refsStore[name]?.current;
    const time = (video?.currentTime / video?.videoDuration ) * 100 + "%"
    setVideoProgress(time);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseUpDown = useCallback((e: any) => {
      if (timebarRefInner.current === e.target || timebarRefContainer.current === e.target) {
        if (e.type === Etype.MOUSE_UP) {
          setMouseDown(false);
        } else if(e.type === Etype.MOUSE_DOWN) {
          setMouseDown(true);
        };
      };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseMoveAndClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
      if (e.type === Etype.MOUSE_CLICK) {
        handleUpdateTime(e);
      } else if (e.type === Etype.MOUSE_MOVE && mouseDown) {
        handleUpdateTime(e, Etype.MOUSE_MOVE);
      };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseDown]);

  const handleUpdateTime = useCallback((e: MouseEvent<HTMLDivElement>, type?:string ) => {
    const { videoDuration, setCurrentTime } = refsStore[name].current;
    if ( timebarRefInner.current && timebarRefContainer.current && videoDuration ) {
      const mousePosition = type ? e.clientX : e.nativeEvent.offsetX;
      const timeBarWidth = timebarRefContainer.current.offsetWidth;
      const distanceFromLeft = timebarRefContainer.current.getBoundingClientRect().left
      const time = type
      ? ((mousePosition - distanceFromLeft) / timeBarWidth) * videoDuration
      : (mousePosition / timeBarWidth) * videoDuration;
      setCurrentTime(time);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUpDown);
    return () => {
      window.removeEventListener("mouseup", handleMouseUpDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(refsStore[name]) handleTimeProgress();
  });

  return { videoProgress, handleMouseMoveAndClick, handleMouseUpDown }
};
