import * as React from "react";
import styled from "styled-components";

import Colors from "../../../common/styles/constans/Colors";
import LikeButton from "./LikeButton";
import Options from "./Options";
import {Device} from "../../../common/styles/constans/Device"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 55px;
  width: 115px;
  padding-left: 20px;
  padding-right: 5px;
  height: 65px;
  background-color: ${Colors.VERY_LIGHT_PURPLE};
  @media ${Device.mobileM} {
    padding-left: 47px;
    padding-right: 24px;
    width: 130px;
  }
  @media ${Device.mobileL} {
    width: 184px;
    height: 72px;
    border-top-left-radius: 72px;
  }
`;


const VideoInteractions: React.SFC = () => {
  return (
    <Wrapper>
      <LikeButton type={"like"} />
      <LikeButton type={"dislike"} />
      <Options/>
    </Wrapper>
  );
};

export default VideoInteractions;
