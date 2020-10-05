import React from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import Button from "../DumbComponents/Button";

const FullscreenBtn: React.FC<{}> = () => {
  const {actions: {setFullscreen}, state: {isFullscreen}}= useVideoPlayerContext();
  const imgIcon = isFullscreen ? "/img/videoPlayer/small-screen.svg" : "/img/videoPlayer/fullscreen.svg";
  return <Button action={setFullscreen} icon={imgIcon} />;
};
export default FullscreenBtn;
