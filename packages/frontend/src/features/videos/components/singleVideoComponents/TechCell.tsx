import * as React from 'react';
import styled from "styled-components"

import {fontWeight} from "../../../common/styles/constans/fontWeight"
import {Colors} from "../../../common/styles/constans/Colors"
import {Device} from "../../../common/styles/constans/Device"
import {FontSize} from "../../../common/styles/constans/FontSize"

const Cell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 4px 16px;
    box-shadow: 0px 3px 6px 0px ${Colors.OPACITY_GRAY};
    border-radius: 10px;
    width: 59px;
    height: 18px;
    margin-right: 8px;
    @media ${Device.TABLET} {
        margin-right: 12px;
        width: 83px;
        height: 25px;
    }
`
const TechTxt = styled.p`
    font-weight: ${fontWeight.SEMI_BOLD};
    font-size: ${FontSize.VERY_SMALL};
    @media ${Device.TABLET} {
        font-size: ${FontSize.SMALL};
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