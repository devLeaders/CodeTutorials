import { Actions, MovieActionsTypes } from "./types";

export function playPause(): MovieActionsTypes {
  return {
    type: Actions.PLAY
  };
}
