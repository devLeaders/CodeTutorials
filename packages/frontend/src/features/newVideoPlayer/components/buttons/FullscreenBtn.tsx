import React from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import Button from "../DumbComponents/Button";

const FullscreenBtn: React.FC<{}> = () => {
  const {toggleFullscreen}= useVideoPlayerContext();
  const imgIcon = true ? "/img/videoPlayer/small-screen.svg" : "/img/videoPlayer/fullscreen.svg";
  return <Button action={toggleFullscreen} icon={imgIcon} />;
};
export default FullscreenBtn;
