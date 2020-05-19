import * as React from 'react';
import styled from "styled-components";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux"


import { getMovieState } from "./actions/ReduxActions"
import { useVideoPlayerActions } from "./actions/EventController"
import { device } from "../../constans/device"


export const VideoPlayer = styled.video<{ isFullscreen: boolean }>`
    width: 100%;
    height: ${props => props.isFullscreen ? "100%" : "auto"};
    max-height: ${props => props.isFullscreen ? "100%" : "830px"};
    object-fit: contain;
`
interface VpProps {
    small?: string;
}

const VP: React.SFC<VpProps> = (props) => {
    const { small } = props
    const videoRef: any = useRef<HTMLVideoElement>();
    const isFullscreen: boolean = useSelector(state => getMovieState(state).isFullscreen)
    const { handleTimeProgress, handleVideoClick } = useVideoPlayerActions(videoRef, small)

    return (
        <VideoPlayer
            isFullscreen={isFullscreen}
            ref={videoRef}
            onTimeUpdate={handleTimeProgress}
            onClick={handleVideoClick}
        >
            <source
                src="http://localhost:3300/videos/video"
                type="video/mp4">
            </source>
        </VideoPlayer>
    );
}

export default VP;