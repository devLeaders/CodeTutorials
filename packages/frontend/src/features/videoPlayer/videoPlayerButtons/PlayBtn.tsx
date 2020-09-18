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

const PlayBtn: React.FC<PlayBtnProps> = (props) => {
    const { small } = props;
    const movie = useSelector(state => getMovieState(state));
    const isPaused: boolean = movie.isMinimized ? movie.smallIsPaused : movie.isPaused;
    const isActive = checkButtonType(ButtonTypes.PLAY, isPaused)
    const runPlay = useClickHandler(ButtonTypes.PLAY, isPaused, small)



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