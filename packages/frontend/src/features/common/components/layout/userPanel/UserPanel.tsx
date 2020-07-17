import * as React from "react";
import styled from "styled-components";

import UserSection from "./UserSection";
import ActionsSection from "./ActionsSection";
import { Device } from "../../../styles/constans/Device";
import { Colors } from "../../../styles/constans/Colors";
import {BtnsType} from "../navBar/BtnsSection"
import ClosePopUp from "../ClosePopUp"


const Wrapper = styled.div<{active: boolean}>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  display: ${({active}) => active ? "flex" : "none"};
  flex-direction: column;
  box-sizing: border-box;
  width: 320px;
  padding: 21px 14px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.02);
  background-color: ${Colors.WHITE};
  z-index: 2;
  @media ${Device.TABLET} {
    width: 443px;
    padding: 24px 37px;
  }
`;

interface UserPanelProps {
  active: boolean
}

const UserPanel: React.SFC<UserPanelProps> = ({active}) => {

  return (
    <Wrapper active={active}>
      <ClosePopUp name={BtnsType.USER}/>
      <UserSection />
      <ActionsSection />
    </Wrapper>
  );
};

export default UserPanel;
