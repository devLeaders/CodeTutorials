import React from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import Button from "../DumbComponents/Button";

const PlayBtn: React.FC<{}> = () => {
  const { actions:{togglePlay}, state: {isPaused} } = useVideoPlayerContext();
  const imgIcon = isPaused ? "/img/videoPlayer/play.svg" : "/img/videoPlayer/pause.svg";
  return <Button action={togglePlay} icon={imgIcon} />;
};
export default PlayBtn;
