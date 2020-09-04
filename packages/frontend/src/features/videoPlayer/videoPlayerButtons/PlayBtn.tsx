import * as React from 'react';
import { useSelector } from "react-redux"

import { checkButtonType } from "../actions/checkButtonType "
import { getMovieState } from "../actions/ReduxActions"
import NewVideoPlayerBtn from "./NewVideoPlayerBtn"
import { ButtonTypes } from "../enums";
import { useClickHandler } from "../actions/EventController"



interface PlayBtnProps {
    small?: string;
}

const PlayBtn: React.SFC<PlayBtnProps> = (props) => {
    const { small } = props;
    const isPaused = useSelector(state => getMovieState(state).isPaused)
    const smallIsPaused = useSelector(state => getMovieState(state).smallIsPaused)
    const paused = small ? smallIsPaused : isPaused;
    const isActive = checkButtonType(ButtonTypes.PLAY, paused)
    const runPlay = useClickHandler(ButtonTypes.PLAY, paused, small)



    return (
        <NewVideoPlayerBtn
            mainImg="/img/videoPlayer/play.svg"
            afterClickImg="/img/videoPlayer/pause.svg"
            videoState={isActive}
            runVideoAction={runPlay}
            small={small}
            play="play"
        />

    );
}

export default PlayBtn;