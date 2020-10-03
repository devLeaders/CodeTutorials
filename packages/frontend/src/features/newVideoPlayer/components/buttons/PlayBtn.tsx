import React from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import Button from "../DumbComponents/Button";

const PlayBtn: React.FC<{}> = () => {
  const {actions} = useVideoPlayerContext();
  console.log(actions)
  const imgIcon = true ? "/img/videoPlayer/play.svg" : "/img/videoPlayer/pause.svg";
  return <Button action={actions.playPause} icon={imgIcon} />;
};
export default PlayBtn;
