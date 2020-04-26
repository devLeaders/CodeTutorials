import * as React from "react";
import styled from "styled-components";

import UserSection from "./UserSection";
import ActionsSection from "./ActionsSection";
import { Device } from "../../../styles/constans/Device";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 320px;
  padding: 21px 14px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.02);
  @media ${Device.tablet} {
    width: 443px;
    padding: 24px 37px;
  }
`;

const UserPanel: React.SFC = () => {
  return (
    <Wrapper>
      <UserSection />
      <ActionsSection />
    </Wrapper>
  );
};

export default UserPanel;
