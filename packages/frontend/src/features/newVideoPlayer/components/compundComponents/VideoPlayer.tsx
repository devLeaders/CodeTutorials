import React, { useMemo } from "react";
import { IVideoPlayer, IVideoPlayerComposition } from "../../models/video.type";
import { VideoPlayerContext } from "../../utils/videoPlayer.context";
import FullscreenBtn from "../buttons/FullscreenBtn";
import MuteBtn from "../buttons/MuteBtn";
import PlayBtn from "../buttons/PlayBtn";
import Video from "./Video";
import Timebar from "./TimeBar";
import MinimizeBtn from "../buttons/MinimizeBtn";
import { useVideoEffects } from "../../hooks/useVideoEffects";
import { useVideoActions } from "../../hooks/useVideoActions";
import CurrentTime from "./CurrentTime";
import VideoDuration from "./VideoDuration";

const VideoPlayer: React.FC<IVideoPlayer> & IVideoPlayerComposition = ({ children, name }) => {
  const { actions, state } = useVideoActions(name)
  useVideoEffects(name);
  
  const value = useMemo(() => ({ actions, state, name }), [state]);
  return <VideoPlayerContext.Provider value={value}>{children}</VideoPlayerContext.Provider>;
};

VideoPlayer.PlayBtn = PlayBtn;
VideoPlayer.Video = Video;
VideoPlayer.MuteBtn = MuteBtn;
VideoPlayer.FullscreenBtn = FullscreenBtn;
VideoPlayer.Timebar = Timebar;
VideoPlayer.MinimizeBtn = MinimizeBtn;
VideoPlayer.CurrentTime = CurrentTime;
VideoPlayer.VideoDuration = VideoDuration;

export default VideoPlayer;
