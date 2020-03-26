import * as React from 'react';
import { useSelector, RootStateOrAny, useDispatch } from "react-redux"

import styled from "styled-components";
import { checkButtonType } from "../../../actions/checkButtonType "
import { getMovieState } from "../../../actions/ReduxActions"
import NewVideoPlayerBtn from "./NewVideoPlayerBtn"
import { ButtonTypes } from "../../../enums";
import { runVideoAction } from "../../../actions/videoActionController"
import { toogleFullscreen } from "../../../../store/singleMovie/actions"

const Wrapper = styled.div``

export interface FullscreenBtnProps {

}

const FullscreenBtn: React.SFC<FullscreenBtnProps> = () => {
    const isFullscreen = useSelector(state => getMovieState(state).isFullscreen)
    const isActive = checkButtonType(ButtonTypes.FULLSCREEN, isFullscreen)
    const dispatch = useDispatch()

    const changeIsFullscreen = () => {
        dispatch(toogleFullscreen())
    }

    const runAction = () => {
        runVideoAction(ButtonTypes.FULLSCREEN, isFullscreen, changeIsFullscreen)
    }

    return (
        <NewVideoPlayerBtn
            mainImg="/icons/fullscreen.svg"
            afterClickImg="/icons/small-screen.svg"
            videoState={isActive}
            runVideoAction={runAction}
        />
    );
}

export default FullscreenBtn;