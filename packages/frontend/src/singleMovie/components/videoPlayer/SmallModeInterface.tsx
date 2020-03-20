import * as React from 'react';
import styled from "styled-components";

import VideoPlayerBtn from "./VideoPlayerBtn";
import Timer from "./Timer";
import { ButtonTypes } from "../../enums";

const Wrapper = styled.div`
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s;
`;

export interface SmallModeInterfaceProps {
    videoRef: any;
    videoContainerRef: any;
}

const SmallModeInterface: React.SFC<SmallModeInterfaceProps> = (props) => {
    const { videoRef, videoContainerRef } = props;
    return (
        <Wrapper className="small">
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