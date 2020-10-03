import React from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";
import Button from "../DumbComponents/Button";

const MuteBtn: React.FC<{}> = () => {
  const { actions: {toggleMute}, state } = useVideoPlayerContext();
  const imgIcon = state.isMuted ? "/img/videoPlayer/un-mute.svg" : "/img/videoPlayer/mute.svg";
  return <Button action={toggleMute} icon={imgIcon} />;
};
export default MuteBtn;
