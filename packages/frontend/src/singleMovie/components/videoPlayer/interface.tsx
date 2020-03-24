import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";

import TimeBar from "./TimeBar";
import VideoPlayerControls from "./VideoPlayerControls";
import SmallModeInterface from "./SmallModeInterface"
import { useSelector } from "react-redux"
import { getMovieState } from "../../actions/ReduxActions"


const InterfaceWrapper = styled.div<{ paused: boolean; isMin: boolean }>`
  display: ${props => !props.isMin ? "flex" : "block"};
  position: ${props => props.isMin ? "static" : "absolute"};
  bottom: 0;
  width: 100%;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.2s;
  transform: ${props => props.isMin ? "translateY(0)" : (props.paused ? "translateY(0)" : "translateY(100%)")};
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