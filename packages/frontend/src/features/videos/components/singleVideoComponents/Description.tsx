import * as React from "react";
import styled from "styled-components";

import { FontSize } from "../../../common/styles/constans/FontSize";
import { Device } from "../../../common/styles/constans/Device";

const DescTxt = styled.p`
  width: 100%;
  text-align: left;
  margin-top: 15px;
  font-size: ${FontSize.XSMALL};
  @media ${Device.TABLET} {
    font-size: ${FontSize.MEDIUM};
    margin-top: 43px;
    padding-bottom: 30px;
  }
`;

interface DescriptionProps {
  desc: string;
}

const Description: React.SFC<DescriptionProps> = ({ desc }) => {
  return <DescTxt>{desc}</DescTxt>;
};

export default Description;
