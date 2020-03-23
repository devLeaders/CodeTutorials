import * as React from 'react';
import styled from "styled-components";

import PlayBtn from "../videoPlayer/videoPlayerButtons/PlayBtn"
import MinimizeBtn from "../videoPlayer/videoPlayerButtons/MinimizeBtn"
import TimeBar from "./TimeBar";

const Wrapper = styled.div`
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s;
`;


const SmallModeInterface: React.SFC = () => {

    return (
        <Wrapper className="small">
            <PlayBtn min="true " />
            <MinimizeBtn min="true" />
            <TimeBar />
        </Wrapper>
    );
}

export default SmallModeInterface;