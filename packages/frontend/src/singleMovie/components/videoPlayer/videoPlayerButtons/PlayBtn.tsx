import * as React from 'react';
import { useCallback } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from "react-redux"

import styled from "styled-components";
import { checkButtonType } from "../../../actions/checkButtonType "
import { getMovieState } from "../../../actions/ReduxActions"
import NewVideoPlayerBtn from "./NewVideoPlayerBtn"
import { ButtonTypes } from "../../../enums";
import { runVideoAction } from "../../../actions/videoActionController"
import { playPause, playPauseSmall } from "../../../../store/singleMovie/actions"

const Wrapper = styled.div<{ small: string | undefined }>`
    position: ${props => props.small ? "absolute" : "static"};
    top: ${props => props.small ? "50%" : "0"};
    left: ${props => props.small ? "50%" : "0"};
    transform: ${props => props.small ? "translate(-50%, -50%)" : ""};
    background-color: red;
`

interface PlayBtnProps {
    small?: string;
}

const PlayBtn: React.SFC<PlayBtnProps> = (props) => {
    const { small } = props;
    const isPaused = useSelector(state => getMovieState(state).isPaused)
    const smallIsPaused = useSelector(state => getMovieState(state).smallIsPaused)
    const paused = small ? smallIsPaused : isPaused;
    const isActive = checkButtonType(ButtonTypes.PLAY, paused)
    const dispatch = useDispatch()
    console.log(smallIsPaused)

    const play = () => {
        if (small) {
            dispatch(playPauseSmall())
        } else {
            dispatch(playPause())
        }
    }
    const runAction = () => {
        runVideoAction(ButtonTypes.PLAY, paused, play, small)
    }


    return (
        <NewVideoPlayerBtn
            mainImg="/icons/play.svg"
            afterClickImg="/icons/pause.svg"
            videoState={isActive}
            runVideoAction={runAction}
            small={small}
            play="play"
        />

    );
}

export default PlayBtn;