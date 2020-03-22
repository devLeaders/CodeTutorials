import * as React from 'react';
import { useSelector, RootStateOrAny, useDispatch } from "react-redux"

import styled from "styled-components";
import { typeCheck } from "../../../actions/typeCheck"
import { getMovieState } from "../../../actions/ReduxActions"
import NewVideoPlayerBtn from "./NewVideoPlayerBtn"
import { ButtonTypes } from "../../../enums";
import { runVideoAction } from "../../../actions/runVideoAction"
import { toogleFullscreen } from "../../../../store/singleMovie/actions"

const Wrapper = styled.div``

export interface FullscreenBtnProps {

}

const FullscreenBtn: React.SFC<FullscreenBtnProps> = () => {
    const isFullscreen = useSelector(state => getMovieState(state).isFullscreen)
    const isActive = typeCheck(ButtonTypes.FULLSCREEN, isFullscreen)
    const dispatch = useDispatch()

    const changeIsFullscreen = () => {
        dispatch(toogleFullscreen())
    }

    const runAction = () => {
        runVideoAction(ButtonTypes.FULLSCREEN, isFullscreen, changeIsFullscreen)
    }

    return (
        <Wrapper>
            <NewVideoPlayerBtn
                mainImg="/icons/fullscreen.svg"
                afterClickImg="/icons/small-screen.svg"
                videoState={isActive}
                runVideoAction={runAction}
            />
        </Wrapper>
    );
}

export default FullscreenBtn;