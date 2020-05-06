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
    padding: 10px 12px;
    border-bottom: ${({isActive, title}) => isActive === title ? "none" : `1px solid ${Colors.ASH}`};
    border-right: 1px solid ${Colors.ASH};
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
    @media ${Device.tablet} {
        font-size: ${FontSize.MEDIUM_BIG};
    }
`
export interface NavItemProps {
    title: string,
    isActive: string,
    setIsActive: (title: string) => void
}
 
const NavItem: React.SFC<NavItemProps> = ({title, isActive, setIsActive}) => {
    const handleClick = () => {
        setIsActive(title)
    }
    return ( 
        <ListItem onClick={handleClick} isActive={isActive} title={title}>
           <Title>{title}</Title> 
        </ListItem>
     );
}
 
export default NavItem;