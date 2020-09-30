import React from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import Button from "../DumbComponents/Button";

const FullscreenBtn: React.FC<{}> = () => {
  const { actions, state } = useVideoPlayerContext();
  const imgIcon = state.isFullscreen ? "/img/videoPlayer/small-screen.svg" : "/img/videoPlayer/fullscreen.svg";
  return <Button action={actions.toggleFullscreen} icon={imgIcon} />;
};
export default FullscreenBtn;
