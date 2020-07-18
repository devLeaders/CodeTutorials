import * as React from 'react';
import {useLocation} from "react-router-dom"
import styled from "styled-components";

import TimeBar from "./TimeBar";
import VideoPlayerControls from "./VideoPlayerControls";
import SmallModeInterface from "./SmallModeInterface"
import { useSelector } from "react-redux"
import { getMovieState } from "./actions/ReduxActions"
import { Device } from "../common/styles/constans/Device"
import {Navigation} from "../../config/routing/NavigationPath"


const InterfaceWrapper = styled.div<{ paused: boolean; small: string | undefined, location: string }>`
    display: ${({location}) => location == Navigation.HOME ? "none": "flex"};
    position: ${props => props.small ? "static" : "absolute"};
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 0.2s;
    transform: ${props => (props.paused && !props.small ? "translateY(0)" : "translateY(100%)")};
    margin-top: 0;
    @media ${Device.MOBILE_L}{
        height: 35px;
        }
    @media ${Device.TABLET}{
        height: 50px;
        }
    @media ${Device.LAPTOP}{
        height: 80px;
    }
`;

interface InterfaceProps {
    small?: string;
}

const Interface: React.SFC<InterfaceProps> = (props) => {
    const { small } = props
    const isPaused = useSelector(state => getMovieState(state).isPaused)
    const location = useLocation()


    return (
        <div>
            {small && <SmallModeInterface small={small} />}
            {!small && <InterfaceWrapper
                className="interfaceWrapper"
                paused={isPaused}
                small={small}
                location={location.pathname}>

                <VideoPlayerControls />
                <TimeBar />
            </InterfaceWrapper>}
        </div>
    );
}

export default Interface;