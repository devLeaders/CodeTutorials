import React from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import Button from "../DumbComponents/Button";

const MuteBtn: React.FC<{}> = () => {
  const {actions: {muteUnmute}, state: {isMuted}} = useVideoPlayerContext();
  const imgIcon = isMuted ? "/img/videoPlayer/un-mute.svg" : "/img/videoPlayer/mute.svg";
  return <Button action={muteUnmute} icon={imgIcon} />;
};
export default MuteBtn;
