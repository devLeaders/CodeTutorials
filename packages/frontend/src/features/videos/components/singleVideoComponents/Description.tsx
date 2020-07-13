import * as React from 'react';
import styled from "styled-components"

import {FontSize} from "../../../common/styles/constans/FontSize"
import {Device} from "../../../common/styles/constans/Device"

const DescTxt = styled.p`
    width: 100%;
    text-align: left;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    @media ${Device.TABLET} {
        font-size: ${FontSize.MEDIUM};
        padding-top: 43px;
        padding-bottom: 30px;
    }
`

interface DescriptionProps {
    desc: string
}
 
const Description: React.SFC<DescriptionProps> = ({desc}) => {
    return ( 
        <DescTxt>{desc}</DescTxt>
     );
}
 
export default Description;