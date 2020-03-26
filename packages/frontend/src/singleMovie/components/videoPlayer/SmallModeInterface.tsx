import * as React from 'react';
import styled from "styled-components";

import PlayBtn from "../videoPlayer/videoPlayerButtons/PlayBtn"
import MinimizeBtn from "../videoPlayer/videoPlayerButtons/MinimizeBtn"
import TimeBar from "./TimeBar";

export const SmallInterface = styled.div`
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s;
`;


const SmallModeInterface: React.SFC = () => {

    return (
        <SmallInterface className="small">
            <PlayBtn min="true " />
            <MinimizeBtn min="true" />
            <TimeBar />
        </SmallInterface>
    );
}

export default SmallModeInterface;