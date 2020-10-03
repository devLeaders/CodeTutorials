import { VideoPlayerName } from "./VideoPlayerEnum";


class RefsStore {
  [VideoPlayerName.BIG]:any; 
  [VideoPlayerName.SMALL]:any; 
  // VideoPlayerName.BIG: HTMLDivElement | undefined;
  // smallVideoRef: HTMLVideoElement | undefined;
  // bigVideoPlayerRef: any;
  // bigVideoRef: HTMLVideoElement | undefined;
}
export const refsStore = new RefsStore();
