import * as React from "react";
import styled from "styled-components";

import {Colors} from "../../../../common/styles/constans/Colors";
import { FontSize } from "../../../../common/styles/constans/FontSize";
import { fontWeight } from "../../../../common/styles/constans/fontWeight";
import Interactions from "./VideoInteractions"
import {Device} from "../../../../common/styles/constans/Device"


const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 5px;
  @media ${Device.MOBILE_L} {
    height: 115px;
    padding-top:16px;
    padding-left: 9px;
  }
`;
const Title = styled.h3`
  width: 100%;
  text-decoration: none;
  font-size: ${FontSize.VERY_SMALL};
  font-weight: ${fontWeight.SEMI_BOLD};
  color: ${Colors.DARK_BLUE};
`;

const PostedText = styled.h4`
  font-size: ${FontSize.VERY_SMALL};
  color: ${Colors.MEDIUM_GRAY};
  margin-right: 5px;
  margin-left: 5px;
`;

const DetailInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const VideoInfo: React.SFC = () => {
  return (
    <Wrapper>
      <Title>Which tool is better? </Title>
      <DetailInfo>
        <PostedText>Posted 2 Days ago</PostedText>
        <Interactions/>
      </DetailInfo>
    </Wrapper>
  );
};

export default VideoInfo;
