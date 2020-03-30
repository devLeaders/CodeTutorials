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

interface SmallModeInterfaceProps {
    small?: string;
}
const SmallModeInterface: React.SFC<SmallModeInterfaceProps> = (props) => {
    const { small } = props
    return (
        <SmallInterface className="small">
            <PlayBtn small={small} />
            <MinimizeBtn small={small} />
            <TimeBar small={small} />
        </SmallInterface>
    );
}

export default SmallModeInterface;