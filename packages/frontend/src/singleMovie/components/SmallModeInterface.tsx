import * as React from 'react';
import styled from "styled-components";

import VideoPlayerBtn from "./videoPlayerControls/VideoPlayerBtn";
import Timer from "./Timer";
import { ButtonTypes } from "../enums";

const Wrapper = styled.div`
display: flex;
width:100%;
height:100%;

`;

export interface SmallModeInterfaceProps {
    videoRef: any;
    videoContainerRef: any;
    videoTime: number;
    videoDuration: number;
}

const SmallModeInterface: React.SFC<SmallModeInterfaceProps> = (props) => {
    const { videoRef, videoContainerRef, videoTime, videoDuration } = props;
    return (
        <Wrapper>
            <VideoPlayerBtn
                videoRef={videoRef}
                videoContainerRef={videoContainerRef}
                mainImg="/play.svg"
                afterClickImg="/pause.svg"
                type={ButtonTypes.PLAY}
                small={"small"}
            />
            <VideoPlayerBtn
                videoRef={videoRef}
                videoContainerRef={videoContainerRef}
                mainImg="/smallmode.svg"
                afterClickImg="/normalscreen.svg"
                type={ButtonTypes.SMALL_MODE}
                small={"small"}
            />
        </Wrapper>
    );
}

export default SmallModeInterface;