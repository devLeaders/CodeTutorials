import { useState, useEffect, useCallback } from "react";
import { useSelector, RootStateOrAny } from "react-redux";

import { runVideoAction, changeVideoTime, handleVideoShortcuts, changeIsFullscreen, } from "./videoActionController";
import {setTime, changeState } from "../../../config/redux/videoPlayer/actions";
import { playPauseVideo } from "../actions/videoPlayerActions";
import { refsStore } from "../refs.store";
import { getMovieState } from "../actions/ReduxActions"
import { ButtonTypes, Keys } from "../enums";



export enum EType {
    MOUSE_DOWN = "mousedown",
    MOUSE_UP = "mouseup",
    MOUSE_MOVE = "mousemove",
    MOUSE_CLICK = "click"
}


//button click events
export const useClickHandler = (btnType: string, videoState: boolean, small?: string) => {
    return () => runVideoAction(btnType, videoState, small)
}



//timeBar Actions
export const useTimeBarAction = (TimeBarRef: any, small: string | undefined) => {
    const [mouseDown, setMouseDown] = useState(false);

    const handleMouseUpDown = (e: any) => {
        checkIsMouseDown(e.type)
    }

    const checkIsMouseDown = (eventType: string) => {
        if (eventType === EType.MOUSE_DOWN) {
            setMouseDown(true)
        } else if (eventType === EType.MOUSE_UP) {
            setMouseDown(false)
        }
    }

    const handleMouseMoveAndClick = (e: any) => {
        if (e.type === EType.MOUSE_CLICK) {
            changeVideoTime(e, TimeBarRef, small)
        } else if (e.type === EType.MOUSE_MOVE && mouseDown) {
            changeVideoTime(e, TimeBarRef, EType.MOUSE_MOVE, small)
        }
    }


    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMoveAndClick);
        window.addEventListener("mouseup", handleMouseUpDown);
        return () => {
            window.removeEventListener("mousemove", handleMouseMoveAndClick);
            window.removeEventListener("mouseup", handleMouseUpDown);
        }
    })

    return {
        handleMouseUpDown,
        mouseDown,
        handleMouseMoveAndClick
    }
}


//videe player actions
export const useVideoPlayerActions = (videoRef: any, small?: string) => {
    const videoState: RootStateOrAny = useSelector(state => getMovieState(state))
    const paused = small ? videoState.smallIsPaused : videoState.isPaused
    if (small) {
        refsStore.RefsSmall[0] = videoRef
    } else {
        refsStore.Refs[0] = videoRef;
    }

    const handleTimeProgress = () => {
        //TODO:ogarnąć sytuacje w której ref jest pusty lub nie ma .current
        const video = videoRef.current;
        const time = (video.currentTime / video.duration) * 100
        setTime(time, small)
    }

    const handleVideoClick = () => {
        changeState(ButtonTypes.PLAY, small)

        playPauseVideo(videoRef.current, paused);
    }

    const handleFullscreenChange = useCallback(() => {
        return changeIsFullscreen(small)
    },[small]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        let reduxAction;
        const key = e.keyCode
        if (key === Keys.SPACE || key === Keys.LEFT || key === Keys.RIGHT) {
            reduxAction = () => changeState(ButtonTypes.PLAY)
        }
        handleVideoShortcuts(e, reduxAction, videoState)
    },[videoState])

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("fullscreenchange", handleFullscreenChange)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("fullscreenchange", handleFullscreenChange)
        }
    }, [paused, handleFullscreenChange, handleKeyDown])

    return {
        handleTimeProgress,
        handleFullscreenChange,
        handleVideoClick
    }
}


