import React from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import Button from "../DumbComponents/Button";

const MuteBtn: React.FC<{}> = () => {
  const actions= useVideoPlayerContext();
  const imgIcon = true ? "/img/videoPlayer/un-mute.svg" : "/img/videoPlayer/mute.svg";
  return <Button action={actions.toggleMute} icon={imgIcon} />;
};
export default MuteBtn;
