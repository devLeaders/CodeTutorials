import * as React from "react";
import styled from "styled-components";

import { FontSize } from "../../common/styles/constans/FontSize";
import { fontWeight } from "../../common/styles/constans/fontWeight";
import { Colors } from "../../common/styles/constans/Colors";
import {Device} from "../../common/styles/constans/Device"
import {BtnsType} from "../../common/components/layout/navBar/BtnsSection"
import Description from "./Description";
import ClosePopUp from "../../common/components/layout/ClosePopUp"
import AllertsSection from "./AllertsSection"
 
const Wrapper = styled.div<{active: boolean}>`
  position: fixed;
  top: 0;
  right: 0;
  display: ${({active}) => active ? "flex" : 'none'};
  flex-direction: column;
  padding: 24px 24px;
  width: 320px;
  background-color: ${Colors.WHITE};
  border-right: 1px solid ${Colors.GRAY};
  z-index: 2;
  @media ${Device.TABLET} {
    width: 443px;
    padding: 24px 34px;
  }
`;
const Title = styled.h2`
  width: 100%;
  text-align: left;
  font-size: ${FontSize.XXMEDIUM_L};
  font-weight: ${fontWeight.BOLD};
  margin-bottom: 12px;
`;


interface AllertsPanelProps {
  active: boolean
}


const AllertsPanel: React.SFC<AllertsPanelProps> = ({active}) => {
  
  return (
    <Wrapper active={active}>
      <ClosePopUp name={BtnsType.ALERTS}/>
      <Title>Alerty</Title>
      <Description />
      <AllertsSection/>
    </Wrapper>
  );
};

export default AllertsPanel;
