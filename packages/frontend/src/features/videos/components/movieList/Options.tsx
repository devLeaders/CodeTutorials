import * as React from 'react';
import styled from "styled-components";

import {Colors} from "../../../common/styles/constans/Colors";

const Dots = styled.div`
    position: relative;
    width: 3px;
    height: 3px;
    border-radius: 50px; 
    background-color: ${Colors.DARK_BLUE};

    &::before,::after{
        position: absolute;
        content: "";
        display: block;
        width: 3px;
        height: 3px;
        border-radius: 50px; 
        background-color: ${Colors.DARK_BLUE};
    }

    &::before{
        top: 6px;
    }
    &::after{
       top: -6px
    }

`
 
const Options: React.SFC = () => {
    return (  
        <Dots/>
    );
}
 
export default Options;