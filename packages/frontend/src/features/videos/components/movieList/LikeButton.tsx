import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavigationPath from "../../../../config/routing/NavigationPath";
import Colors from "../../../common/styles/constans/Colors";
import {FontSize} from "../../../common/styles/constans/FontSize"

const Wrapper = styled.button`

`;

const Img = styled.div`

`;

interface LikeButtonProps {
    type: 'like' | 'dislike'
}

const LikeButton = (props:LikeButtonProps)=> {
    const image = props.type == "like" ? 
    <img src={"img/like.svg"} /> : 
    <img src={"img/dislike.svg"} />;

    return (
      <Wrapper>
          {image}
      </Wrapper>
    );
  };


export default LikeButton;
