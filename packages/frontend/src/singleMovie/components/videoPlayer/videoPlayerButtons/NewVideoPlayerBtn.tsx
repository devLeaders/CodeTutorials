import React from "react";
import styled from "styled-components";

import { device } from "../../../../constans/device"


const ToogleButton = styled.button<{ min: string | undefined, play: string | undefined }>`
    display: flex;
    position: ${props => props.min ? "absolute" : "static"};
    top: ${props => props.min && props.play ? "50%" : "5px"};
    left: ${props => props.min && props.play ? "50%" : "5px"};
    transform: ${props => props.min && props.play ? "translate(-50%, -50%)" : ""};
    width:  ${props => props.min && props.play ? "30px" : "12px"};
    margin-right: 6px;
    cursor: pointer;
    background: none;
    padding: 0;
    border: 0;
    outline: 0;
    @media ${device.MOBILE_M}{
      width: 14px
    }
    @media ${device.MOBILE_L}{
      width: 18px
    }
    @media ${device.TABLET}{
      width: 27px;
      margin-right: 15px;
    }
    @media ${device.LAPTOP}{
      width: 35px;
      margin-right: 20px;
    }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export interface NewVideoPlayerButton {
  mainImg: string;
  afterClickImg: string;
  videoState: boolean;
  runVideoAction(): void;
  min?: string;
  play?: string;
}

const NewVideoPlayerButton: React.SFC<NewVideoPlayerButton> = props => {
  const { mainImg, afterClickImg, videoState, runVideoAction, min, play } = props;
  const startStopImg = videoState ?
    (<Img src={mainImg} />) :
    (<Img src={afterClickImg} />);
  return (

    <ToogleButton onClick={runVideoAction} min={min} play={play}>
      {startStopImg}
    </ToogleButton>
  );
};

export default NewVideoPlayerButton


