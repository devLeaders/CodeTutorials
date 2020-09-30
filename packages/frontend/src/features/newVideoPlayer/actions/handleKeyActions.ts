import { Keys } from "../utils/enums";
import { handleRef } from "./handleRef";

export const handleKeyActions = (
  e: any,
  videoTime: number,
  isMinimized: boolean,
  handleVideoStatus: (arg: boolean) => void,
  toggleMute: () => void,
  handleTogglePlay: () => void
) => {
  const { video } = handleRef(isMinimized);
  const timeSkip = 5;
  const key = e.key;

  let newVideoTime: number = videoTime;
  if (video) {
    const timeToEnd = video.duration - video.currentTime;
    if (key === Keys.REWIND) {
      newVideoTime = newVideoTime - timeSkip;
      return (video.currentTime = newVideoTime);
    } else if (key === Keys.SKIP_FORWARD && timeToEnd > timeSkip) {
      newVideoTime = newVideoTime + timeSkip;
      handleVideoStatus(true);
      return (video.currentTime = newVideoTime);
    } else if (key === Keys.PLAY_PAUSE) {
      e.preventDefault();
      handleTogglePlay();
    } else if (key === Keys.MUTE) return toggleMute();
  }
};
