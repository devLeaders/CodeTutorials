import React from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import Button from "../DumbComponents/Button";

const PlayBtn: React.FC<{}> = () => {
  const { actions, state } = useVideoPlayerContext();
  const imgIcon = state.isPaused ? "/img/videoPlayer/play.svg" : "/img/videoPlayer/pause.svg";
  return <Button action={actions.handleTogglePlay} icon={imgIcon} />;
};
export default PlayBtn;
