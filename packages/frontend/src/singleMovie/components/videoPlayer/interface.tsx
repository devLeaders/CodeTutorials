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
    videoContainerRef: any
    videoRef: any
    isPaused: any
    isMinimized: any
    TimeBarRef: any
    videoTime: any
    setVideoTime: any
}

const Interface: React.SFC<InterfaceProps> = (props) => {
    const { videoContainerRef, videoRef, TimeBarRef, isMinimized, isPaused, videoTime, setVideoTime } = props

    const [videoDuration, setVideoDuration] = useState(0);
    const video = videoRef.current;
    const timePlayed = videoTime + "%";


    const handleProgressBarClick = (e: any) => {
        changeVideoTimeOnClick(e)
    }

    const changeVideoTimeOnClick = (e: any) => {
        const video = videoRef.current;
        const progressBarPosition = e.nativeEvent.offsetX;
        const TimeBarWidth = TimeBarRef.current.offsetWidth;
        const newTime = (progressBarPosition / TimeBarWidth) * video.duration;
        video.currentTime = newTime;
        setVideoTime((video.currentTime / video.duration) * 100);
    };

    return (
        <div>
            {isMinimized ?
                <SmallModeInterface
                    videoRef={videoRef}
                    videoContainerRef={videoContainerRef}
                />
                : <InterfaceWrapper
                    className="interfaceWrapper"
                    paused={isPaused}
                    isMin={isMinimized}
                >

                    <VideoPlayerControls
                        videoTime={videoTime}
                        videoRef={videoRef}
                        videoContainerRef={videoContainerRef}
                        videoDuration={videoDuration}
                    />

                    <TimeBar
                        ref={TimeBarRef}
                        videoTime={timePlayed}
                        click={handleProgressBarClick}
                    />
                </InterfaceWrapper>}
            {isMinimized &&
                <TimeBar
                    ref={TimeBarRef}
                    videoTime={timePlayed}
                    click={handleProgressBarClick}
                />}
        </div>
    );
}

export default Interface;