import * as React from 'react';
import styled from 'styled-components';

import { FontSize } from "../../../styles/constans/FontSize"

const Wrapper = styled.div`
    display: flex;
    padding: 2px;
    align-items: center;
    min-width: 230px;
    min-height: 40px;
    border-radius: 10px;
    margin-bottom: 35px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
`
const BtnText = styled.p`
    font-size: 14px;
    font-weight: 600;
`
const Img = styled.img`
    width: 26px;
    height: 26px;
    margin-left: 20px;
    margin-right: 10px;
`

export interface GoToBtnProps {
    text: string;
}

const GoToBtn: React.SFC<GoToBtnProps> = (props) => {
    const { text } = props;
    return (
        <Wrapper>
            <Img src="img/check-board.svg" alt="obrazek" />
            <BtnText>{text}</BtnText>
        </Wrapper>);
}

export default GoToBtn;