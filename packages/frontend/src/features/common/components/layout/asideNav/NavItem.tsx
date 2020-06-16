import * as React from 'react';
import styled from "styled-components"

import {Colors} from "../../../styles/constans/Colors"
import {FontSize} from "../../../styles/constans/FontSize"
import {fontWeight} from "../../../styles/constans/fontWeight"
import {Device} from "../../../styles/constans/Device"

const ListItem = styled.li<{isActive: string, title: string}>`
    background-color: ${({isActive, title}) => isActive === title ? `${Colors.WHITE}` : `${Colors.ULTRA_LIGHT_GRAY}` };
    display: flex;
    align-items: center;
    padding: 0px 12px;
    border-bottom: ${({isActive, title}) => isActive === title ? "1px solid transparent" : `1px solid ${Colors.GRAY_1}`};
    border-right: 1px solid ${Colors.GRAY_1};
    cursor: pointer;
    &:nth-last-child(1){
        flex-grow: 1;
    } 
    &:nth-last-child(1){
        border-right: none;
    } 
    @media ${Device.LAPTOP} {
        flex-grow: 1; 
        justify-content: center;
    }
`
const Title = styled.h4`
    font-size: ${FontSize.XSMALL};
    font-weight: ${fontWeight.BOLD};
    @media ${Device.TABLET} {
        font-size: ${FontSize.XXMEDIUM_L};
    }
`
export interface NavItemProps {
    title: string,
    isActive: string,
    handleClick: (e: any) => void
}
 
const NavItem: React.SFC<NavItemProps> = ({title, isActive, handleClick}) => {
    
    return ( 
        <ListItem onClick={handleClick} isActive={isActive} title={title}>
           <Title title={title}>{title}</Title> 
        </ListItem>
     );
}
 
export default NavItem;