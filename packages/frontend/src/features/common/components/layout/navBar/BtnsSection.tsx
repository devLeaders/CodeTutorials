import * as React from 'react';
import styled from "styled-components"

import Btn from "./Btn"

const BtnsSection = styled.section`
    margin-left: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 55px;
    padding-left: 15px;
    padding-right: 15px;
    border-right: 2px solid rgba(0,0,0,0.1);
    border-left: 2px solid rgba(0,0,0,0.1); 
    width: min-content;
`
 
const IconsSection: React.SFC = () => {
    return (  
        <BtnsSection>
            <Btn src="/img/navBarImg/teams.svg"/>
            <Btn src="/img/navBarImg/cos.svg"/>
            <Btn src="/img/navBarImg/filters.svg"/>
            <Btn src="/img/navBarImg/allerts.svg"/>
        </BtnsSection>
    );
}
 
export default IconsSection;