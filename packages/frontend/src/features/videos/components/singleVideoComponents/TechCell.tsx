import * as React from 'react';
import styled from "styled-components"

import {fontWeight} from "../../../common/styles/constans/fontWeight"
import {Device} from "../../../common/styles/constans/Device"

const Cell = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 4px 16px;
    box-shadow: 0px 3px 6px 0px #00000029;
    border-radius: 10px;
    width: 59px;
    height: 18px;
    margin-right: 8px;
    @media ${Device.tablet} {
        margin-right: 12px;
        width: 83px;
        height: 25px;
    }
`
const TechTxt = styled.p`
    font-weight: ${fontWeight.SEMI_BOLD};
    font-size: 8px;
    @media ${Device.tablet} {
        font-size: 13px;
    }
`
interface TechCellProps {
    technology: string
}
 
const TechCell: React.SFC<TechCellProps> = ({technology}) => {
    return ( 
        <Cell>
            <TechTxt>{technology}</TechTxt>
        </Cell>
     );
}
 
export default TechCell;