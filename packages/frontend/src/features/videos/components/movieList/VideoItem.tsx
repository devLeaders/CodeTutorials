import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import {Colors} from "../../../common/styles/constans/Colors";
import {Device} from "../../../common/styles/constans/Device"
import VideoInfo from "./VideoInfo"

const Wrapper = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid ${Colors.VERY_LIGHT_PURPLE};
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0px ${Colors.LIGHT_GRAY};
  margin-inline: 10px;
  min-width: 240px;
  @media ${Device.mobileM} {
    margin-inline: 15px;
    min-width: 260px;
  }
`;

const Img = styled.img`
  height: 145px;
  width: 100%;
  border-radius: 2px;
  @media ${Device.mobileL} {
    height: 177px;
    width: 330px;
  }
`;




const VideoItem: React.ForwardRefExoticComponent<any> = React.forwardRef(()=>{
    return (
      <Wrapper to={''}>
        <Img
          src="https://cdn.pixabay.com/photo/2020/02/12/16/13/landscape-4843193_960_720.jpg"
          alt=""
        />
        <VideoInfo/>
      </Wrapper>
    );
  }
);

export default VideoItem;
