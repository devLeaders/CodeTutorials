import * as React from 'react';
import {useState} from 'react';
import styled from "styled-components"

import {FontSize} from "../../common/styles/constans/FontSize"
import {fontWeight} from "../../common/styles/constans/fontWeight"
import {Device} from "../../common/styles/constans/Device"
import { Colors } from "../../common/styles/constans/Colors";
import ScrollBar from "../../common/components/layout/ScrollBar"
import WatchedCheckbox from "./WatchedCheckbox"
import Categories from "./Categories"

const Wrapper = styled.div`
    display:none;
    position: fixed;
    right:0;
    height:100vh;
    width: 475px;
    padding: 24px 24px;
    background-color: ${Colors.WHITE};
    border-left: 3px solid ${Colors.BLACK_OPACITY}; 
    @media ${Device.LAPTOP}{
        display:block;
        padding: 24px 34px;
        box-shadow: 1px 1px 2px 0px ${Colors.OPACITY_VERY_LIGHT_GRAY};
    }
`
const Title = styled.h3`
    font-size: ${FontSize.MEDIUM_BIG};
    font-weight: ${fontWeight.BOLD};
`

const Filters: React.FC = () => {
    const [isACtive, setIsActive] = useState(true)

    return ( 
        <Wrapper>
            <ScrollBar type="filters"/>
            <Title>Filtry</Title>
            <WatchedCheckbox setIsActive={setIsActive} isActive={isACtive}/>
            <Categories/>
        </Wrapper>
     );
}
 
export default Filters;