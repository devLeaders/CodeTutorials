import React from "react";
import styled from "styled-components";
import { signInGoogle } from "../../action/signInGoogle";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.button<{ imageIcon: string }>`
  width: 50px;
  height: 50px;
  background: ${({ imageIcon }) => `url(${imageIcon})`};
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 0;
  box-shadow: 0px 3px 17px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin-right: 20px;
  &:hover {
    box-shadow: 0px 3px 17px rgba(0, 0, 0, 0.3);
  }
`;

const SocialMedia: React.FC = (props) => {
  return (
    <Wrapper>
      <Icon imageIcon='img/google.svg' onClick={signInGoogle} />
      <Icon imageIcon='img/twitter.svg' />
      <Icon imageIcon='img/instagram.svg' />
    </Wrapper>
  );
};

export default SocialMedia;
