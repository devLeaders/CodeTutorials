import { handleRef } from "./handleRef";

export const handleToggleMute = (isMuted: boolean, isMinimized: boolean) => {
  const { video } = handleRef(isMinimized);
  if (video) {
    return (video.muted = !isMuted);
  }
};
