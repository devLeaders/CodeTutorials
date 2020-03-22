import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  padding: 3px;
`;

const ToogleButton = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  outline: 0;
`;

const Img = styled.img`
  height: 15px;
  width: 15px;
`;

export interface NewVideoPlayerButton {
  mainImg: string;
  afterClickImg: string;
  videoState: boolean;
  runVideoAction: any;
}

const NewVideoPlayerButton: React.SFC<NewVideoPlayerButton> = props => {
  const { mainImg, afterClickImg, videoState, runVideoAction } = props;

  const startStopImg = videoState ?
    (<Img src={mainImg} />) :
    (<Img src={afterClickImg} />);

  return (
    <Wrapper onClick={runVideoAction}>
      <ToogleButton>
        {startStopImg}
      </ToogleButton>
    </Wrapper>
  );
};

export default NewVideoPlayerButton
