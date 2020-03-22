import * as React from 'react';
import { useCallback } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from "react-redux"

import styled from "styled-components";
import { typeCheck } from "../../../actions/typeCheck"
import { getMovieState } from "../../../actions/ReduxActions"
import NewVideoPlayerBtn from "./NewVideoPlayerBtn"
import { ButtonTypes } from "../../../enums";
import { runVideoAction } from "../../../actions/runVideoAction"
import { playPause, toogleFullscreen, toggleSmallMode } from "../../../../store/singleMovie/actions"

const Wrapper = styled.div``

export interface PlayBtnProps {

}

const PlayBtn: React.SFC<PlayBtnProps> = () => {
    const isPaused = useSelector(state => getMovieState(state).isPaused)
    const isActive = typeCheck(ButtonTypes.PLAY, isPaused)
    const dispatch = useDispatch()

    const play = () => {
        dispatch(playPause())
    }
    const runAction = () => {
        runVideoAction(ButtonTypes.PLAY, isPaused, play)
    }

    return (
        <Wrapper>
            <NewVideoPlayerBtn
                mainImg="/icons/play.svg"
                afterClickImg="/icons/pause.svg"
                videoState={isActive}
                runVideoAction={runAction}
            />
        </Wrapper>
    );
}

export default PlayBtn;