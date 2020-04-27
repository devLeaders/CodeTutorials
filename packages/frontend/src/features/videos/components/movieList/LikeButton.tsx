import * as React from "react";
import styled from "styled-components";



const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 30px;
  height: 30px;
  padding: 8px;
  border-radius: 50px;
  border: none;
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
