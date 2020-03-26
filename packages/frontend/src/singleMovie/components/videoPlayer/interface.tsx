import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";

import TimeBar from "./TimeBar";
import VideoPlayerControls from "./VideoPlayerControls";
import SmallModeInterface from "./SmallModeInterface"
import { useSelector } from "react-redux"
import { getMovieState } from "../../actions/ReduxActions"
import { device } from "../../../constans/device"


const InterfaceWrapper = styled.div<{ paused: boolean; isMin: boolean }>`
    display: flex;
    position: ${props => props.isMin ? "static" : "absolute"};
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 0.2s;
    transform: ${props => (props.paused ? "translateY(0)" : "translateY(100%)")};
    @media ${device.TABLET}{
        height: 50px
        }
    @media ${device.LAPTOP}{
        height: 80px;
    }
`;


const Interface: React.SFC = () => {
    const isPaused = useSelector(state => getMovieState(state).isPaused)
    const isMinimized = useSelector(state => getMovieState(state).isMinimized)


    return (
        <div>
            {isMinimized ?
                <SmallModeInterface />
                : <InterfaceWrapper
                    className="interfaceWrapper"
                    paused={isPaused}
                    isMin={isMinimized}
                >
                    <VideoPlayerControls />
                    <TimeBar />
                </InterfaceWrapper>}
        </div>
    );
}

export default Interface;