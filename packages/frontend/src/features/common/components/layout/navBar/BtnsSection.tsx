import * as React from 'react';
import styled from "styled-components"

import Btn from "./Btn"
import { Device } from "../../../styles/constans/Device";
import  {Colors}  from "../../../styles/constans/Colors";


const BtnsSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding-left: 15px;
    padding-right: 15px;
    border-right: 2px solid ${Colors.BLACK_OPACITY}; 
    @media ${Device.TABLET} {
    width: 220px;
    }
    @media ${Device.LAPTOP} {
    width: 280px;
    border-left: none;  
    border-right: 3px solid ${Colors.BLACK_OPACITY}; 
    }
`

 
const IconsSection: React.SFC = () => {
    return (  
        <BtnsSection >
            <Btn src="/img/navBarImg/teams.svg"/>
            <Btn src="/img/navBarImg/cos.svg"/>
            <Btn src="/img/navBarImg/filters.svg"/>
            <Btn src="/img/navBarImg/allerts.svg"/>
        </BtnsSection>
    );
}
 
export default IconsSection;