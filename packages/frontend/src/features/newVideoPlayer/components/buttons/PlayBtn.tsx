import React from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import { VideoPlayerName } from "../../utils/VideoPlayerEnum";
import Button from "../DumbComponents/Button";

const PlayBtn: React.FC = () => {
  const {actions: {playPause}, state: {bigIsPaused, smallIsPaused}, name} = useVideoPlayerContext();
  const playerType = name === VideoPlayerName.BIG ? bigIsPaused : smallIsPaused;
  const imgIcon = playerType ? "/img/videoPlayer/play.svg" : "/img/videoPlayer/pause.svg";
  return <Button action={playPause} icon={imgIcon} />;
};
export default PlayBtn;
