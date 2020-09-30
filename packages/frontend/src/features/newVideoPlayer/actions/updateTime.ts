import { handleRef } from "./handleRef";

export const updateTime = (
  isMinimized: boolean,
  e: any,
  timebarRefInner: React.MutableRefObject<HTMLDivElement | null>,
  timebarRefContainer: React.MutableRefObject<HTMLDivElement | null>,
  videoTime: number
) => {
  const { video } = handleRef(isMinimized);
  let newVideoTime: number = videoTime;
  if (
    (e.target === timebarRefInner.current || e.target === timebarRefContainer.current) &&
    timebarRefInner.current &&
    timebarRefContainer.current &&
    video
  ) {
    const mousePosition = e.offsetX;
    const TimeBarWidth = timebarRefContainer.current.offsetWidth;
    const time = (mousePosition / TimeBarWidth) * video.duration;
    newVideoTime = time;
    video.currentTime = time;
  }
  return newVideoTime;
};
