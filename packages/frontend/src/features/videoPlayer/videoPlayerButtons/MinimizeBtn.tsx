import * as React from 'react';
import { useSelector, RootStateOrAny, useDispatch } from "react-redux"
import styled from "styled-components";

import { checkButtonType } from "../actions/checkButtonType "
import { getMovieState } from "../actions/ReduxActions"
import NewVideoPlayerBtn from "./NewVideoPlayerBtn"
import { ButtonTypes } from "../enums";
import { useClickHandler } from "../actions/EventController"



interface MinimizeBtnProps {
    small?: string;
}

const MinimizeBtn: React.SFC<MinimizeBtnProps> = (props) => {
    const { small } = props;
    const isMinimized = useSelector(state => getMovieState(state).isMinimized)
    const isActive = checkButtonType(ButtonTypes.SMALL_MODE, isMinimized)
    const toggleSmallMode = useClickHandler(ButtonTypes.SMALL_MODE, isMinimized, small)



    return (
        <NewVideoPlayerBtn
            mainImg="/icons/small-mode.svg"
            afterClickImg="/icons/normal-screen.svg"
            videoState={isActive}
            runVideoAction={toggleSmallMode}
            small={small}
        />
    );
}

export default MinimizeBtn;