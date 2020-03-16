import React from "react";
import styled from "styled-components";
import { useState } from "react";

import toggleOnClick from "../../actions/handleToggleOnClick";

const Wrapper = styled.div`
  padding: 3px;
  background: none;
  display: flex;
  align-content: center;
`;

const ToogleButton = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  outline: 0;
`;

const Img = styled.img`
  opacity: 0.7;
`;

export interface StartStopBtn {
  videoRef: any;
  mainImg: string;
  afterClickImg: string;
  type: any;
}

const StartStopBtn: React.SFC<StartStopBtn> = props => {
  const { videoRef, mainImg, afterClickImg, type } = props;
  const [isClicked, setIsClicked] = useState(true);

  const handleToogleButton = () =>
    toggleOnClick(isClicked, setIsClicked, videoRef, type);
  const startStopImg = isClicked ? (
    <Img src={mainImg} alt={type} />
  ) : (
    <Img src={afterClickImg} alt={type} />
  );
  return (
    <Wrapper>
      <ToogleButton onClick={handleToogleButton}>{startStopImg}</ToogleButton>
    </Wrapper>
  );
};

export default StartStopBtn;
