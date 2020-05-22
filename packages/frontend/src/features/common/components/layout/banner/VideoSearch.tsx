import * as React from 'react';
import styled from "styled-components"

import {fontWeight} from "../../../styles/constans/fontWeight"
import {FontSize} from "../../../styles/constans/FontSize"
import {Device} from "../../../styles/constans/Device"

const Wrapper = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 268px;
    height: 81px;
    border-radius: 40px;
    box-shadow: 0px 2px 8px 0px #00000029;
    margin-right: 23px;
    padding-left: 45px;
    padding-right: 25px;
    @media ${Device.LAPTOP}{
        display: flex;
    }
    @media ${Device.LAPTOP_L}{
        width: 401px;
    }
`
const Lens = styled.img`
    width: 38px;
    cursor: pointer;   
`
const Input = styled.input`
    outline: none;
    font-size: ${FontSize.MEDIUM};
    font-weight: ${fontWeight.SEMI_BOLD};
    width: 120px;
    height: 24px;
    border: none;
    @media ${Device.LAPTOP_L}{
        width: 250px;
    }
`
const VideoSearch: React.SFC = () => {
    return ( 
        <Wrapper>
            <Input placeholder="Wyszukaj"/>
            <Lens src="/img/lens.svg"/>
        </Wrapper>
     );
}
 
export default VideoSearch;