import * as React from 'react';
import { useSelector} from "react-redux"

import { checkButtonType } from "../actions/checkButtonType "
import { getMovieState } from "../actions/ReduxActions"
import NewVideoPlayerBtn from "./NewVideoPlayerBtn"
import { ButtonTypes } from "../enums";
import { useClickHandler } from "../actions/EventController"





const FullscreenBtn: React.SFC = () => {
    const isFullscreen = useSelector(state => getMovieState(state).isFullscreen)
    const isActive = checkButtonType(ButtonTypes.FULLSCREEN, isFullscreen)
    const toggleFullscreen = useClickHandler(ButtonTypes.FULLSCREEN, isFullscreen)


    return (
        <NewVideoPlayerBtn
            mainImg="/img/videoPlayer/fullscreen.svg"
            afterClickImg="/img/videoPlayer/small-screen.svg"
            videoState={isActive}
            runVideoAction={toggleFullscreen}
        />
    );
}

export default FullscreenBtn;