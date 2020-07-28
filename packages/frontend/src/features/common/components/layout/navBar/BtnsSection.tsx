import React from "react";
import styled from "styled-components";

import Btn from "./Btn";
import { Device } from "../../../styles/constans/Device";
import { Colors } from "../../../styles/constans/Colors";
import {usePopUp} from "../../../hooks/usePopUp"

const BtnsSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  border-right: 2px solid ${Colors.BLACK_OPACITY};
  @media ${Device.TABLET} {
    width: 220px;
  }
  @media ${Device.LAPTOP} {
    width: 280px;
    border-left: none;
    border-right: 3px solid ${Colors.BLACK_OPACITY};
  }
`;

export enum BtnsType {
  TEAMS = "teams",
  ALERTS = "alerts",
  X = "x",
  Y = "y",
  USER = "user",
}

const IconsSection: React.SFC = () => {
  const {showPopUp} = usePopUp()

  return (
    <BtnsSection>
      <Btn
        src="/img/navBarImg/teams.svg"
        name={BtnsType.TEAMS}
        showPopUp={showPopUp}
      />
      <Btn
        src="/img/navBarImg/cos.svg"
        name={BtnsType.X}
        showPopUp={showPopUp}
      />
      <Btn
        src="/img/navBarImg/filters.svg"
        name={BtnsType.Y}
        showPopUp={showPopUp}
      />
      <Btn
        src="/img/navBarImg/allerts.svg"
        name={BtnsType.ALERTS}
        showPopUp={showPopUp}
      />
    </BtnsSection>
  );
};

export default IconsSection;
