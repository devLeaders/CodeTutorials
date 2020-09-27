import { createContext } from "react";

interface IInitailContext {
  actions: any;
  state: IState;
}
interface IState {
  isPaused: boolean;
}

export const VideoPlayerContext = createContext({} as IInitailContext);
