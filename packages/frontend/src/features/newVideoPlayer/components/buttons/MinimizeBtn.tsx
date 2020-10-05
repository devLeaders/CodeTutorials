import React from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import Button from "../DumbComponents/Button";

const MinimizeBtn: React.FC<{}> = () => {
  const {actions:{handleMinimize},state:{isMinimized}}= useVideoPlayerContext();
  const imgIcon = isMinimized ? "/img/videoPlayer/normal-screen.svg" : "/img/videoPlayer/small-mode.svg";
  return <Button action={handleMinimize} icon={imgIcon} />;
};
export default MinimizeBtn;
