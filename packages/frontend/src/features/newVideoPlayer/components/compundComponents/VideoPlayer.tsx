import React, { useMemo } from "react";
import { useVideoPlayerActions } from "../../hooks/useVideoPlayerActions";
import { IVideoPlayer, IVideoPlayerComposition } from "../../models/video.type";
import { VideoPlayerContext } from "../../utils/videoPlayer.context";
import FullscreenBtn from "../buttons/FullscreenBtn";
import MuteBtn from "../buttons/MuteBtn";
import PlayBtn from "../buttons/PlayBtn";
import Video from "./Video";
import Timebar from "./TimeBar";
import MinimizeBtn from "../buttons/MinimizeBtn";

const VideoPlayer: React.FC<IVideoPlayer> & IVideoPlayerComposition = ({ children }) => {
  const { actions, state } = useVideoPlayerActions();

  const value = useMemo(() => ({ actions, state }), [state]);
  return <VideoPlayerContext.Provider value={value}>{children}</VideoPlayerContext.Provider>;
};

VideoPlayer.PlayBtn = PlayBtn;
VideoPlayer.Video = Video;
VideoPlayer.MuteBtn = MuteBtn;
VideoPlayer.FullscreenBtn = FullscreenBtn;
VideoPlayer.Timebar = Timebar;
VideoPlayer.MinimizeBtn = MinimizeBtn;

export default VideoPlayer;
