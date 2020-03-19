import React from "react";
import styled from 'styled-components';
import Colors from "../common/styles/constans/Colors";
import { FontSize } from "../common/styles/constans/FontSize";


const InfoBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 482px;
    border-radius: 20px;
    color: ${Colors.nWhite};
    box-shadow: 0px 2px 8px 0px ${Colors.nMediumGrey};
    padding: 66px 33px 34px 33px;
`;

const Title = styled.div`
    color: ${Colors.nBlack};
    font-weight: bold;
    text-align: left;
    font-size: ${FontSize.VERYLARGE};
    margin-bottom: 34px;
`;
const Description = styled.div`
    color: ${Colors.nBlack};
    text-align: left;
    font-size: ${FontSize.MEDIUM};
    margin-bottom: 53px;
    line-height: 22px;
`;

const StartButton = styled.button`
    color: ${Colors.nWhite};
    text-align: center;
    font-size: ${FontSize.MEDIUM};
    background-color: ${Colors.nBlack};
    border-radius: 30px;
    min-width: 277px;
    max-width: 70%;
    padding-top: 24px;
    padding-bottom: 24px;
    border: none;
    font-weight: bold;
    align-self: center;
    outline: none;
    cursor: pointer;
    word-break: break-all;
`;
interface InfoBoxProps {
    click(): void;
}

export class InfoBox extends React.Component<InfoBoxProps>  {
    
    render(){
        return(
                <InfoBoxContainer>
                    <Title>Sprawdz swoja wiedze</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus ipsam velit a ratione, magni beatae ullam veniam repudiandae voluptates quo non quos quas minima doloremque iure possimus culpa. Illum!</Description>
                    <StartButton onClick={this.props.click}>Rozpocznij</StartButton>
                </InfoBoxContainer>
            )
    }
}



export default InfoBox;