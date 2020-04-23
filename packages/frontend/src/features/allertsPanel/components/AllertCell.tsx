import * as React from "react";
import styled from "styled-components";

import { FontSize } from "../../common/styles/constans/FontSize";
import { FontWeight } from "../../common/styles/constans/fontWeight";
import { Device } from "../../common/styles/constans/Device";
import { Colors } from "../../common/styles/constans/Colors";

const AllertContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 77px;
  border-radius: 10px;
  box-shadow: 0px 3px 6px 0px #00000029;
  margin-bottom: 25px;
  padding: 5px 10px;
  border: 2px solid transparent;
  cursor: pointer;
  &:hover {
    border: 2px solid ${Colors.BLACK};
  }
  @media ${Device.tablet} {
    padding: 5px 37px;
    width: 369px;
  }
`;

const BlackRectangle = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 22px;
  height: 20px;
  background-color: black;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 7px;
  ${AllertContainer}:hover & {
    display: block;
  }
  @media ${Device.tablet} {
    width: 30px;
    height: 28px;
  }
`;


const TextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  margin-bottom: 9px;
`;

const AllertIcon = styled.img`
  width: 30px;
  margin-right: 15px;
  @media ${Device.tablet} {
    margin-right: 29px;
  }
`;
const Title = styled.h3`
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: ${FontWeight.BOLD};
`;
const Desc = styled.p`
  font-size: ${FontSize.VERY_SMALL};
  line-height: 10px;
`;

export interface AllertCellProps {
  title: string;
  description: string;
  icon: string;
}

const AllertCell: React.SFC<AllertCellProps> = ({title,description,icon}) => {
  return (
    <AllertContainer>
      <BlackRectangle />
      <AllertIcon src={icon} />
      <TextContainer>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </TextContainer>
    </AllertContainer>
  );
};

export default AllertCell;
