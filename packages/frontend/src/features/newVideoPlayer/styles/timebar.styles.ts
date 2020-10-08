import styled from "styled-components";
import { Colors } from "../../common/styles/constans/Colors";
import { Device } from "../../common/styles/constans/Device";

export const TimePlayedBar = styled.div<{ videoProgress: string }>`
  width: ${({ videoProgress }) => (videoProgress ? videoProgress : 0)};
  height: 2px;
  background-color: purple;
  @media ${Device.TABLET}{
    height: 3px;
  };
  @media ${Device.LAPTOP}{
    height: 4px;
  };
  
`;

export const Wrapper = styled.div`
  width:100%;
  height: 2px;
  bottom: 18px;
  background-color: ${Colors.nBlack};
  cursor: pointer;
  z-index:2;
  @media ${Device.TABLET}{
    height: 3px;
  };
  @media ${Device.LAPTOP}{
    height: 4px;
  };
`;