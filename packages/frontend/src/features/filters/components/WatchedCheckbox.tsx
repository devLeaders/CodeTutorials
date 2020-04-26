import * as React from 'react';
import styled from "styled-components"

import {Colors} from "../../common/styles/constans/Colors"
import {FontSize} from "../../common/styles/constans/FontSize"
import {FontWeight} from "../../common/styles/constans/fontWeight"
import {Device} from "../../common/styles/constans/Device"

const Wrapper = styled.div`
    margin-top: 35px;
    display: flex;
    align-items: center;
`
const Checkbox = styled.input<{isActive: boolean}>`
    background: ${({isActive}) => isActive ? "url('img/watched.svg') no-repeat center" : ""};
    appearance: none;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px 0px ${Colors.OPACITY_GRAY};
    margin-right: 14px;
    cursor: pointer;
    transition: transform ease 0.2s;
    &:hover {
        transform: scale(1.1)
    }
`
const Title = styled.p`
    font-size: ${FontSize.NORMAL};
    font-weight: ${FontWeight.SEMI_BOLD};
    @media ${Device.tablet}{
        font-size: ${FontSize.MEDIUM};
    }
`


export interface WatchedCheckboxProps {
    setIsActive: (active:boolean) => void;
    isActive: boolean;
}
 
const WatchedCheckbox: React.SFC<WatchedCheckboxProps> = ({setIsActive, isActive}) => {
    const handleClick = () => {
        setIsActive(!isActive)
    }
    return ( 
    <Wrapper>
        <Checkbox type="checkbox" onClick={handleClick} isActive={isActive}/>
        <Title>Pomiń "już oglądane"</Title>
    </Wrapper>
);
}
 
export default WatchedCheckbox;