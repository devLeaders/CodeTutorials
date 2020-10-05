import React from "react";
import styled from "styled-components";
import { Colors } from "../../../common/styles/constans/Colors";
import { Device } from "../../../common/styles/constans/Device";
import { FontSize } from "../../../common/styles/constans/FontSize";
import { fontWeight } from "../../../common/styles/constans/fontWeight";
import { ITime } from "../../models/video.type";


const Time: React.FC<ITime> = ({ text }) => {
  return <Text>{text}</Text>;
};

const Text = styled.p`
    color: ${Colors.nWhite};
    font-size: ${FontSize.XXXXXXSMALL};
    font-weight: ${fontWeight.SEMI_BOLD};
    @media ${Device.MOBILE_L}{
      font-size: ${FontSize.XXXSMALL};
    };
    @media ${Device.LAPTOP} {
      font-size: ${FontSize.MEDIUM};
  };
`
export default Time;
