import * as React from 'react';
import { useSelector, RootStateOrAny, useDispatch } from "react-redux"

import styled from "styled-components";
import { typeCheck } from "../../../actions/typeCheck"
import { getMovieState } from "../../../actions/ReduxActions"
import NewVideoPlayerBtn from "./NewVideoPlayerBtn"
import { ButtonTypes } from "../../../enums";
import { runVideoAction } from "../../../actions/runVideoAction"
import { toggleSmallMode } from "../../../../store/singleMovie/actions"

const Wrapper = styled.div<{ min: any }>`
    position: ${props => props.min ? "absolute" : "static"};
    top: ${props => props.min ? "0" : "0"};
    left: ${props => props.min ? "0" : "0"};
`

interface MinimizeBtnProps {
    min?: string
}

const MinimizeBtn: React.SFC<MinimizeBtnProps> = (props) => {
    const { min } = props;
    const isMinimized = useSelector(state => getMovieState(state).isMinimized)
    const isActive = typeCheck(ButtonTypes.SMALL_MODE, isMinimized)
    const dispatch = useDispatch()

    const changeIsSmallMode = () => {
        dispatch(toggleSmallMode())
    }

    const runAction = () => {
        runVideoAction(ButtonTypes.SMALL_MODE, isMinimized, changeIsSmallMode)
    }

    return (
        <Wrapper min={min}>
            <NewVideoPlayerBtn
                mainImg="/icons/small-mode.svg"
                afterClickImg="/icons/normal-screen.svg"
                videoState={isActive}
                runVideoAction={runAction}
            />
        </Wrapper>
    );
}

export default MinimizeBtn;