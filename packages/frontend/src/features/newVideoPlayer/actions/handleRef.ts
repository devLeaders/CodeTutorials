import { refsStore } from "../utils/refs.store";

export const handleRef = (isMinimized: boolean) => {
  const video = isMinimized ? refsStore.smallVideoRef : refsStore.bigVideoRef;
  const videoContainer = isMinimized ? refsStore.smallVideoPlayerRef : refsStore.bigVideoPlayerRef;
  return { video, videoContainer };
};
