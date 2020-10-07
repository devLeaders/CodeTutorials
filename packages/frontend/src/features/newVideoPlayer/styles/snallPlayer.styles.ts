import styled from "styled-components";
import { Device } from "../../common/styles/constans/Device";

export const Wrapper = styled.div`
  position: fixed;
  width: 200px;
  bottom: 0;
  right: 0;
  z-index:2;
  @media ${Device.TABLET} {
    width: 400px;
  }
  @media ${Device.LAPTOP} {
    width: 600px;  
    }
`;

export const Background = styled.div<{isPaused:boolean}>`
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-color: ${({isPaused}) => isPaused ? 'black' : 'transparent'};
  opacity: ${({isPaused}) => isPaused ? '0.7' : '0'};
  :hover {
    opacity:0.7;
    background-color: black;
  };
`;
export const TimebarWrapper = styled.div`
  position:absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const PlayBtnWrapper = styled.div<{isPaused:boolean}>`
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  height:40px;
  width:40px;
  z-index: 2;
`;
export const BtnWrapper = styled.div<{isPaused:boolean}>`
  position:absolute;
  top:10px;
  left:10px;
`;