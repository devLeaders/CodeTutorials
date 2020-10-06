import styled from 'styled-components';
import { Colors } from '../../common/styles/constans/Colors';
import { Device } from '../../common/styles/constans/Device';

export const Wrapper = styled.div`
  position:relative;
`;

export const Interface = styled.div<{isPlaying:boolean}>`
  background-color:${({isPlaying}) => isPlaying ? `${Colors.nBlack}` : `transparent`};
  opacity: 0.9;
  position: absolute;
  bottom:0px;
  right:0;
  left:0;
  display: flex;
  flex-direction:column;
  justify-content:center;
  height: 20px;
  @media ${Device.MOBILE_L}{
    height: 37px;
  };
  @media ${Device.TABLET}{
    height: 47px;
  };
  @media ${Device.LAPTOP}{
    height: 82px;
  
  };
`;

export const ButtonsWrapper = styled.div<{isPlaying:boolean}>`
  display:flex;
  justify-content: space-between;
  height: 18px;
  padding: 0px 15px;
  opacity: ${({isPlaying}) => isPlaying ? '0.9' : '0'};
  transition: 0.3s ease-in-out;
    :hover {
       opacity: 0.9;
    };
  @media ${Device.MOBILE_L}{
    height: 35px;
    padding: 0px 20px;
  };
  @media ${Device.TABLET}{
    height: 45px;
  };
  @media ${Device.LAPTOP}{
    height: 80px;
    padding: 0px 35px;
  };
 
`;

export const LeftPanel = styled.div`
 height: 100%;
 width: 40px;
 display: flex; 
 align-items: center;
  justify-content: space-between;
  @media ${Device.MOBILE_L}{
    width: 60px;
  };
  @media ${Device.TABLET}{
    width: 100px;
  };
  @media ${Device.LAPTOP} {
    width: 120px;
  };
`;

export const RightPanel = styled.div`
  width: 75px;
  height: 100%;
  display: flex; 
  align-items: center;
  justify-content: space-around;
  @media ${Device.MOBILE_L}{
    width: 120px;
  };
  @media ${Device.TABLET}{
    width: 180px;
  };
  @media ${Device.LAPTOP} {
    width: 220px;
  };
`;

export const BtnWrapper = styled.div`
  width: 12px;
  height: 12px;
  @media ${Device.MOBILE_M}{
      height: 14px;
      width: 14px
    };
  @media ${Device.MOBILE_L}{
      height: 18px;
      width: 18px
    };
  @media ${Device.TABLET}{
      height: 27px;
      width: 27px;
    };
  @media ${Device.LAPTOP}{
      height: 35px;
      width: 35px;
    };
`;
