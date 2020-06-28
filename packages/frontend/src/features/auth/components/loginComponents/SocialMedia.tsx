import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.div<{ imageIcon: string }>`
  width: 50px;
  height: 50px;
  background: ${({ imageIcon }) => `url(${imageIcon})`};
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
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
      <Icon imageIcon='img/facebook.svg' />
      <Icon imageIcon='img/twitter.svg' />
      <Icon imageIcon='img/instagram.svg' />
    </Wrapper>
  );
};

export default SocialMedia;
