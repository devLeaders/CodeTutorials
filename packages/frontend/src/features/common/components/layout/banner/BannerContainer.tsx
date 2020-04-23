import * as React from 'react';
import styled from "styled-components"

import {Device} from "../../../styles/constans/Device"
import {fontWeight} from "../../../styles/constans/fontWeight"
import VideoSearch from "./VideoSearch"


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 55px;
    background-color: white;
    @media ${Device.LAPTOP}{
        height: 112px;
    }
`
const Logo = styled.img`
    width: 58px;
    margin-left: 10px;
    @media ${Device.tablet}{
        width: 76px;
    }
    @media ${Device.LAPTOP}{
        width: 110px;
    }
`
const Title = styled.h3`
    display: none;
    font-size: 20px;
    font-weight: ${fontWeight.SEMI_BOLD};
    margin-left: 13px;
    @media ${Device.tablet}{
        display: block;
    }
    @media ${Device.LAPTOP}{
        font-size: 28px;
    }
`
const LogoTitleContainer = styled.div`
    display: flex;
    align-items: center;
`
 
const title = "Docker od podstaw";

const BannerContainer: React.SFC = () => {
    return ( 
        <Wrapper>
            <LogoTitleContainer>
                <Logo src="/img/logo.svg"/>
                <Title>{title}</Title>
            </LogoTitleContainer>
            <VideoSearch/>
        </Wrapper>
     );
}
 
export default BannerContainer;