import * as React from 'react';
import styled from "styled-components";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux"

import { refsStore } from "./refs.store"
import { playPauseVideo } from "../../actions/videoPlayerActions"
import { playPause, toggleSmallMode, toogleFullscreen, setVideoTime } from "../../../store/singleMovie/actions"
import { handleVideoShortcuts } from "../../actions/videoActionController"
import { getMovieState } from "../../actions/ReduxActions"
import { device } from "../../../constans/device"


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
    const movieState: RootStateOrAny = useSelector(state => getMovieState(state))
    const dispatch = useDispatch()
    if (props.small) {
        refsStore.RefsSmall[0] = videoRef
    } else {
        refsStore.Refs[0] = videoRef;
    }

    const setTime = (time: number) => {
        dispatch(setVideoTime(time))
    }

    const handleTimeProgress = () => {
        const video = videoRef.current;
        const time = (video.currentTime / video.duration) * 100
        setTime(time)
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        let reduxAction;
        const key = e.keyCode
        if (key == 32 || key == 37 || key == 39) {
            reduxAction = () => dispatch(playPause())
        } else if (document.fullscreenElement) {
            reduxAction = () => dispatch(toogleFullscreen())
        }
        handleVideoShortcuts(e, reduxAction, movieState, setTime, small)
    }

    const handleVideoClick = () => {
        dispatch(playPause())
        playPauseVideo(videoRef.current, movieState.isPaused);
    };


    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
        return () => { window.removeEventListener("keydown", handleKeyDown) }
    }, [movieState.isPaused])


    return (
        <VideoPlayer
            isFullscreen={movieState.isFullscreen}
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