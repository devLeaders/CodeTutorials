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
    position: relative;
    width: 320px;
    padding: 24px 24px;
    @media ${Device.TABLET}{
        padding: 24px 34px;
        width: 443px;
        box-shadow: 1px 1px 2px 0px ${Colors.OPACITY_VERY_LIGHT_GRAY};
    }
`
const Title = styled.h3`
    font-size: ${FontSize.XXMEDIUM_L};
    font-weight: ${fontWeight.BOLD};
`
 
const Filters: React.SFC = () => {
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