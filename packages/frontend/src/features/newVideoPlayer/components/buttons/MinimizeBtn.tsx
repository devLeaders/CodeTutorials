import React from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import Button from "../DumbComponents/Button";

const MinimizeBtn: React.FC<{}> = () => {
  const { actions, state } = useVideoPlayerContext();
  const imgIcon = state.isMinimized ? "/img/videoPlayer/normal-screen.svg" : "/img/videoPlayer/small-mode.svg";
  return <Button action={actions.toggleMinimize} icon={imgIcon} />;
};
export default MinimizeBtn;
