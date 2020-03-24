import * as React from 'react';
import { useCallback } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from "react-redux"

import styled from "styled-components";
import { checkButtonType } from "../../../actions/checkButtonType "
import { getMovieState } from "../../../actions/ReduxActions"
import NewVideoPlayerBtn from "./NewVideoPlayerBtn"
import { ButtonTypes } from "../../../enums";
import { runVideoAction } from "../../../actions/videoActionController"
import { playPause } from "../../../../store/singleMovie/actions"

const Wrapper = styled.div<{ min: any }>`
    position: ${props => props.min ? "absolute" : "static"};
    top: ${props => props.min ? "50%" : "0"};
    left: ${props => props.min ? "50%" : "0"};
    transform: ${props => props.min ? "translate(-50%, -50%)" : ""};
`

interface PlayBtnProps {
    min?: string
}

const PlayBtn: React.SFC<PlayBtnProps> = (props) => {
    const { min } = props;
    const isPaused = useSelector(state => getMovieState(state).isPaused)
    const isActive = checkButtonType(ButtonTypes.PLAY, isPaused)
    const dispatch = useDispatch()

    const play = () => {
        dispatch(playPause())
    }
    const runAction = () => {
        runVideoAction(ButtonTypes.PLAY, isPaused, play)
    }

    return (
        <Wrapper min={min}>
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