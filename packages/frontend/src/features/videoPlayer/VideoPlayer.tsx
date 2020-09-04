import React, { useEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { getMovieState } from "./actions/ReduxActions";
import { useVideoPlayerActions } from "./actions/EventController";
import { reset } from "../../config/redux/videoPlayer/actions";
import { Navigation } from "../../config/routing/NavigationPath";
import { handleVideoRef } from "./actions/handleVideoRef";

export const VideoPlayer = styled.video<{ isFullscreen: boolean }>`
  width: 100%;
  height: ${(props) => (props.isFullscreen ? "100%" : "auto")};
  max-height: ${(props) => (props.isFullscreen ? "100%" : "830px")};
  object-fit: contain;
  cursor: pointer;
`;
interface VpProps {
  small?: string;
  home?: boolean;
}

const VP: React.SFC<VpProps> = ({ small }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isFullscreen: boolean = useSelector((state) => getMovieState(state).isFullscreen);
  const { handleTimeProgress, handleVideoClick } = useVideoPlayerActions(videoRef?.current, small);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    const unlisten = history.listen(() => {
      dispatch(reset());
    });
    return () => {
      unlisten();
    };
  });

  useEffect(() => {
    handleVideoRef(videoRef, small);
  }, [small]);

  return (
    <VideoPlayer
      isFullscreen={isFullscreen}
      ref={videoRef}
      onTimeUpdate={handleTimeProgress}
      onClick={handleVideoClick}
      autoPlay={location.pathname === Navigation.HOME && true}>
      <source src='http://localhost:3300/videos/video' type='video/mp4'></source>
    </VideoPlayer>
  );
};

export default VP;
