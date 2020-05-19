import * as React from 'react';
import styled from "styled-components"

import {Colors} from "../../../styles/constans/Colors"
import {FontSize} from "../../../styles/constans/FontSize"
import {fontWeight} from "../../../styles/constans/fontWeight"
import {Device} from "../../../styles/constans/Device"

export interface TitleProps {
    title: string
}

const TitleTxt = styled.h5`
    display: none;
    font-size: ${FontSize.MEDIUM};
    font-weight: ${fontWeight.BOLD};
    padding: 29px 0px 22px 29px;
    @media ${Device.LAPTOP}{
        display: block;
    }
`
 
const Title: React.SFC<TitleProps> = ({title}) => {
    return ( 
        <TitleTxt>{title}</TitleTxt>
     );
}
 
export default Title;