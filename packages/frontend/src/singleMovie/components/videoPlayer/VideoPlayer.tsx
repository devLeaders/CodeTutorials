import * as React from 'react';
import styled from "styled-components";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux"

import { refsStore } from "./refs.store"
import { playPauseVideo } from "../../actions/videoPlayerActions"
import { playPause, toggleSmallMode, toogleFullscreen, setVideoTime } from "../../../store/singleMovie/actions"
import { handleVideoShortcuts } from "../../actions/videoActionController"
import { getMovieState } from "../../actions/ReduxActions"

export const VideoPlayer = styled.video`
     width: 100%;
     max-height: 600px;
     overflow: hidden;
`

const VP: React.SFC = () => {
    const videoRef: any = useRef<HTMLVideoElement>();
    const movieState: RootStateOrAny = useSelector(state => getMovieState(state))
    const dispatch = useDispatch()
    refsStore.Refs[0] = videoRef

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
        handleVideoShortcuts(e, reduxAction, movieState, setTime)
    }

    const handleVideoClick = () => {
        dispatch(playPause())
        playPauseVideo(videoRef.current, movieState.isPaused);
    };


    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => { window.removeEventListener("keydown", handleKeyDown) }
    }, [movieState.isPaused])


    return (
        <VideoPlayer
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