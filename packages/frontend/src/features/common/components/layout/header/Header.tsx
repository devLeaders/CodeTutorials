import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Banner from "../banner/Banner";
import NavBar from "../navBar/NavBar";
import { Device } from "../../../styles/constans/Device";
import { Colors } from "../../../styles/constans/Colors";
import { useVisibleHeader } from "../../../hooks/useVisibleHeader";
const Wrapper = styled.header<{ transparency?: boolean; visible?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${Colors.WHITE};
  @media ${Device.LAPTOP} {
    background-color: ${({ transparency }) => (transparency ? `${Colors.WHITE}` : `${Colors.WHITE}CF`)};
    width: calc(100% - 446px);
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transition: .2s ease-in-out;
    :hover {
      opacity: 1;
    }
  }
`;

interface HeaderProps {
  transparency?: boolean;
  hide?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparency, hide }) => {
  const isMoviePaused = useSelector((state: { movie: { isPaused: boolean } }) => state.movie.isPaused);
  const visible = useVisibleHeader(isMoviePaused, hide);
  return (
    <>
      <Wrapper transparency={transparency} visible={visible}>
        <Banner />
        <NavBar header={true} />
      </Wrapper>
    </>
  );
};

export default Header;
