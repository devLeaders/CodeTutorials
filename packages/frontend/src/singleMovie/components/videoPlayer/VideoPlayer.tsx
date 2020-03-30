import * as React from 'react';
import styled from "styled-components";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux"

import { refsStore } from "./refs.store"
import { playPauseVideo, videoResize } from "../../actions/videoPlayerActions"
import { playPause, toogleFullscreen, setVideoTime, setSmallVideoTime, playPauseSmall } from "../../../store/singleMovie/actions"
import { handleVideoShortcuts, runVideoAction, changeIsFullscreen } from "../../actions/videoActionController"
import { getMovieState } from "../../actions/ReduxActions"
import { ButtonTypes } from "../../enums";
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
        if (small) {
            dispatch(setSmallVideoTime(time))
        } else {
            dispatch(setVideoTime(time))
        }
    }
    const setIsFullscreen = () => {
        dispatch(toogleFullscreen())
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
        }
        handleVideoShortcuts(e, reduxAction, movieState, setTime, small)
    }
    const handleFullscreenChange = () => {
        changeIsFullscreen(setIsFullscreen, small)
    };

    const handleVideoClick = () => {
        if (small) {
            dispatch(playPauseSmall())
        } else {
            dispatch(playPause())
        }
        const paused = small ? movieState.smallIsPaused : movieState.isPaused
        playPauseVideo(videoRef.current, paused);
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("fullscreenchange", handleFullscreenChange)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("fullscreenchange", handleFullscreenChange)
        }
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