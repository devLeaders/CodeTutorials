import * as React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavigationPath from "../../../../config/routing/NavigationPath";
import Colors from "../../../common/styles/constans/Colors";
import {FontSize} from "../../../common/styles/constans/FontSize"
import LikeButton from "./LikeButton"

const Wrapper = styled(NavLink)`
  cursor: pointer;
  width: 320px;
  height: 177px;
  overflow: hidden;
  border-color: ${Colors.LIGHT_GREY};
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0px ${Colors.VERYLIGHT_GREY};

`;

const Img = styled.img`
  height: 80%;
  width: 100%;
  border-radius: 2px;
`;

const InfoWrapper = styled.div`

`;
const Title = styled.div`
    font-size: ${FontSize.SMALL};
`;

const PostedText = styled.div`
    font-size: ${FontSize.VERY_SMALL};
`;

const ButtonWrapper = styled.div`
`;



const NewMovie: React.ForwardRefExoticComponent<any> = React.forwardRef(()=>{
    return (
      <Wrapper to={''}>
        <Img
          src="https://cdn.pixabay.com/photo/2020/02/12/16/13/landscape-4843193_960_720.jpg"
          alt=""
        />
        <InfoWrapper>
          <Title>Which tool is better? </Title>
          <PostedText>Posted 2 Days ago</PostedText>
          <LikeButton type={"like"}/>
          <LikeButton type={"dislike"}/>
        </InfoWrapper>

      </Wrapper>
    );
  }
);

export default NewMovie;
