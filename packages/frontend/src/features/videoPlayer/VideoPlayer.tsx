import React, {useEffect} from 'react';
import styled from "styled-components";
import { useRef} from "react";
import { useSelector} from "react-redux"

import { getMovieState } from "./actions/ReduxActions"
import { useVideoPlayerActions } from "./actions/EventController"



export const VideoPlayer = styled.video<{ isFullscreen: boolean }>`
    width: 100%;
    height: ${props => props.isFullscreen ? "100%" : "auto"};
    max-height: ${props => props.isFullscreen ? "100%" : "830px"};
    object-fit: contain;
    cursor: pointer;
`
interface VpProps {
    small?: string;
    home?: boolean
}

const VP: React.SFC<VpProps> = ({small, home}) => {
    const videoRef: any = useRef<HTMLVideoElement>();
    const isFullscreen: boolean = useSelector(state => getMovieState(state).isFullscreen)
    const { handleTimeProgress, handleVideoClick } = useVideoPlayerActions(videoRef, small)

    return (
        <VideoPlayer
            isFullscreen={isFullscreen}
            ref={videoRef}
            onTimeUpdate={handleTimeProgress}
            onClick={handleVideoClick}
            autoPlay={home && true}
        >
            <source
                src="http://localhost:3300/videos/video"
                type="video/mp4">
            </source>
        </VideoPlayer>
    );
}

export default VP;