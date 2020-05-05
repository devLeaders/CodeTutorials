import * as React from 'react';
import styled from "styled-components"

import {Colors} from "../../common/styles/constans/Colors"
import { Device } from "../../common/styles/constans/Device";

const Wrapper = styled.div`
    display: none;
    position: absolute;
    top: 8px;
    right: -17px;
    width: 6px;
    height: 100%;
    border-radius: 20px;
    background-color: ${Colors.LIGHT_GRAY};

    @media ${Device.tablet}{
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
    
}
 
const ScrollBar: React.SFC<ScrollBarProps> = () => {
    return ( 
        <Wrapper>
            <DragableEl/>
        </Wrapper>);
}
 
export default ScrollBar;