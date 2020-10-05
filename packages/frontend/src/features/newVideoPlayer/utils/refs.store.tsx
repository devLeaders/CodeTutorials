import { VideoPlayerName } from "./VideoPlayerEnum";


class RefsStore {
  [VideoPlayerName.BIG]: any; 
  [VideoPlayerName.SMALL]: any; 
}
export const refsStore = new RefsStore();
