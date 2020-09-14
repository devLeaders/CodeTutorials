import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../common/styles/constans/Colors";
import { FontSize } from "../../../common/styles/constans/FontSize";
import { signInGoogle } from "../../action/signInGoogle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Icon = styled.button<{ imageIcon: string; error: boolean }>`
  width: 50px;
  height: 50px;
  background: ${({ imageIcon }) => `url(${imageIcon})`};
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: ${({ error }) => (error ? `1px solid ${Colors.nLightRed}` : 0)};
  box-shadow: 0px 3px 17px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    box-shadow: 0px 3px 17px rgba(0, 0, 0, 0.3);
  }
`;
const ErrorMsg = styled.p`
  position: absolute;
  top: 65px;
  font-size: ${FontSize.XSMALL};
  color: ${Colors.nLightRed};
`;

const SocialMedia: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const handleSignIn = useCallback(() => {
    signInGoogle(setError);
  }, []);
  return (
    <Wrapper>
      <Icon imageIcon='img/google.svg' onClick={handleSignIn} error={error} />
      {error ? <ErrorMsg>Nie udało się zalogować</ErrorMsg> : null}
    </Wrapper>
  );
};

export default SocialMedia;
