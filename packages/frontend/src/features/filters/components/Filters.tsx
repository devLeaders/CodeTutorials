import * as React from 'react';
import {useState} from 'react';
import styled from "styled-components"

import {FontSize} from "../../common/styles/constans/FontSize"
import {FontWeight} from "../../common/styles/constans/fontWeight"
import WatchedCheckbox from "./WatchedCheckbox"
import Categories from "./Categories"

const Wrapper = styled.div`
    width: 100%;
    padding: 24px 24px;
`
const Title = styled.h3`
    font-size: ${FontSize.VERY_BIG};
    font-weight: ${FontWeight.BOLD};
`
 
const Filters: React.SFC = () => {
    const [isACtive, setIsActive] = useState(true)
    return ( 
        <Wrapper>
            <Title>Filtry</Title>
            <WatchedCheckbox setIsActive={setIsActive} isActive={isACtive}/>
            <Categories/>
        </Wrapper>
     );
}
 
export default Filters;