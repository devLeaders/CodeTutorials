import * as React from 'react';
import styled from "styled-components"

import {Colors} from "../../styles/constans/Colors"
import { Device } from "../../styles/constans/Device";

const Wrapper = styled.div<{type?: string}>`
    display: none;
    position: absolute;
    top: ${({type}) => type ? "52px" : "8px"};
    right: ${({type}) => type ? "11px" : "-17px"};
    width: 6px;
    height: 80%;
    border-radius: 20px;
    background-color: ${Colors.LIGHT_OPACITY_BLACK};

    @media ${Device.TABLET}{
        display: block;
    }
`
const DragableEl = styled.div`
    transform: translateX(-2px);
    height: 25px;
    width: 10px;
    border-radius: 20px;
    background-color: ${Colors.BLACK};
    box-shadow: 0px 2px 8px 0px ${Colors.OPACITY_GRAY};
`

export interface ScrollBarProps {
    type?: string;
}
 
const ScrollBar: React.SFC<ScrollBarProps> = ({type}) => {
    return ( 
        <Wrapper type={type}>
            <DragableEl/>
        </Wrapper>);
}
 
export default ScrollBar;