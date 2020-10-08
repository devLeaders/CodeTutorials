import { VideoPlayerName } from "./VideoPlayerEnum";

interface IRef {
  current: {
    play():void;
    pause():void;
    toggleMuted(arg:boolean):void;
    reqFullscreen():void;
    setCurrentTime(time:number): void;
    paused: boolean;
    muted: boolean;
    currentTime: number;
    videoDuration: number;
  };
};

class RefsStore {
  [VideoPlayerName.BIG]: IRef;  
  [VideoPlayerName.SMALL]: IRef; 
}
export const refsStore = new RefsStore();
