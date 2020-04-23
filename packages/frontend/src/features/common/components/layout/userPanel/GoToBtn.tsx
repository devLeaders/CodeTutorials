import * as React from 'react';
import styled from 'styled-components';

import "../../../styles/constans/fontWeight"
import { FontWeight } from '../../../styles/constans/fontWeight';


const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    padding: 2px;
    padding-left: 13px;
    padding-top: 6px;
    padding-bottom: 6px;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 35px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
`
const BtnText = styled.p`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-self: center;
    font-size: 14px;
    font-weight: ${FontWeight.BOLD};
`
const Img = styled.img`
    width: 26px;
    height: 26px;
`

export interface GoToBtnProps {
    text: string;
    src: string;
}

const GoToBtn: React.SFC<GoToBtnProps> = (props) => {
    const { text, src } = props;
    return (
        <Wrapper>
            <Img src={src} alt="obrazek" />
            <BtnText>{text}</BtnText>
        </Wrapper>);
}

export default GoToBtn;