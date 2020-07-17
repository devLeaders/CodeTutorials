import React from "react";
import styled from "styled-components";

import { Device } from "../../common/styles/constans/Device"


const ToogleButton = styled.button`
    display: flex;
    cursor: pointer;
    background: none;
    padding: 0;
    border: 0;
    outline: 0;
   
`;

const BigModeButton = styled(ToogleButton)`
    margin-right: 6px;
    width: 12px;
   @media ${Device.MOBILE_M}{
      width: 14px
    }
    @media ${Device.MOBILE_L}{
      width: 18px
    }
    @media ${Device.TABLET}{
      width: 27px;
      margin-right: 15px;
    }
    @media ${Device.LAPTOP}{
      width: 35px;
      margin-right: 20px;
    }
`
const SmallModeButton = styled(ToogleButton) <{ play: string | undefined }>`
    position: absolute;
    top: ${props => props.play ? "50%" : "5px"};
    left: ${props => props.play ? "50%" : "5px"};
    transform: ${props => props.play ? "translate(-50%, -50%)" : ""};
    width:  ${props => props.play ? "30px" : "12px"};
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export interface NewVideoPlayerButton {
  mainImg: string;
  afterClickImg: string;
  videoState: boolean;
  runVideoAction: any;
  small?: string;
  play?: string;
}

const NewVideoPlayerButton: React.SFC<NewVideoPlayerButton> = props => {
  const { mainImg, afterClickImg, videoState, runVideoAction, small, play } = props;
  const startStopImg = videoState ?
    (<Img src={mainImg} />) :
    (<Img src={afterClickImg} />);
  return (
    <>
      {small ?
        <SmallModeButton onClick={runVideoAction} play={play}>
          {startStopImg}
        </SmallModeButton>
        :
        <BigModeButton onClick={runVideoAction}>
          {startStopImg}
        </BigModeButton>}
    </>
  );
};

export default NewVideoPlayerButton


