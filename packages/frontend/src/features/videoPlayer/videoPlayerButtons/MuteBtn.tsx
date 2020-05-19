import * as React from 'react';
import { useSelector } from "react-redux"

import styled from "styled-components";
import { checkButtonType } from "../actions/checkButtonType "
import { getMovieState } from "../actions/ReduxActions"
import NewVideoPlayerBtn from "./NewVideoPlayerBtn"
import { ButtonTypes } from "../enums";
import { useClickHandler } from "../actions/EventController"



const MuteBtn: React.SFC = () => {
    const isMuted = useSelector(state => getMovieState(state).isMuted)
    const isActive = checkButtonType(ButtonTypes.PLAY, isMuted)
    const muteUnmute = useClickHandler(ButtonTypes.MUTE, isMuted)



    return (
        <NewVideoPlayerBtn
            mainImg="/icons/un-mute.svg"
            afterClickImg="/icons/mute.svg"
            videoState={isActive}
            runVideoAction={muteUnmute}

        />
    );
}

export default MuteBtn;