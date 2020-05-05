import * as React from "react";
import styled from "styled-components";

import { FontSize } from "../../common/styles/constans/FontSize";
import { fontWeight } from "../../common/styles/constans/fontWeight";
import { Colors } from "../../common/styles/constans/Colors";
import {Device} from "../../common/styles/constans/Device"
import Description from "./Description";
import AllertsSection from "./AllertsSection"
 
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 24px;
  width: 320px;
  border-right: 1px solid ${Colors.GRAY};
  @media ${Device.tablet} {
    width: 443px;
    padding: 24px 34px;
  }
`;
const Title = styled.h2`
  width: 100%;
  text-align: left;
  font-size: ${FontSize.MEDIUM_BIG};
  font-weight: ${fontWeight.BOLD};
  margin-bottom: 12px;
`;
const Ximg = styled.img`
  width: 30px;
  position: absolute;
  top: 13px;
  right: 13px;
`;




const AllertsContainer: React.SFC = () => {
  return (
    <Wrapper>
      <Ximg src="/img/allerts/x.svg" />
      <Title>Alerty</Title>
      <Description />
      <AllertsSection/>
    </Wrapper>
  );
};

export default AllertsContainer;
