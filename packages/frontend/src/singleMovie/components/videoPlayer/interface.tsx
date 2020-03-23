import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from "styled-components";

import TimeBar from "./TimeBar";
import VideoPlayerControls from "./VideoPlayerControls";
import SmallModeInterface from "./SmallModeInterface"
import { playPauseVideo } from "../../actions/videoPlayerActions";

const InterfaceWrapper = styled.div<{ paused: boolean; isMin: boolean }>`
  display: ${props => !props.isMin ? "flex" : "block"};
  position: ${props => props.isMin ? "" : "absolute"};
  bottom: 0;
  width: 100%;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.2s;
  transform: ${props => props.isMin ? "translateY(0)" : (props.paused ? "translateY(0)" : "translateY(100%)")};
`;

export interface InterfaceProps {
    isPaused: any
    isMinimized: any
    videoTime?: any
}

const Interface: React.SFC<InterfaceProps> = (props) => {
    const { isMinimized, isPaused, videoTime, } = props
    const [videoDuration, setVideoDuration] = useState(0);


    return (
        <div>
            {isMinimized ?
                <SmallModeInterface />
                : <InterfaceWrapper
                    className="interfaceWrapper"
                    paused={isPaused}
                    isMin={isMinimized}
                >
                    <VideoPlayerControls
                        videoTime={videoTime}
                        videoDuration={videoDuration}
                    />

                    <TimeBar />
                </InterfaceWrapper>}
        </div>
    );
}

export default Interface;