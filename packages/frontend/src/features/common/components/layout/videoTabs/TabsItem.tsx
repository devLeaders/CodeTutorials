import * as React from "react";
import styled, { css } from "styled-components";

import { Colors } from "../../../styles/constans/Colors";
import { FontSize } from "../../../styles/constans/FontSize";
import { fontWeight } from "../../../styles/constans/fontWeight";
import { Device } from "../../../styles/constans/Device";

const ListItem = styled.li<{ isActive: boolean; id: string }>`
  background-color: ${Colors.ULTRA_LIGHT_GRAY};
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0px 12px;
  border-bottom: 1px solid ${Colors.GRAY_1};
  border-right: 1px solid ${Colors.GRAY_1};
  cursor: pointer;
  &:nth-last-child(1) {
    flex-grow: 1;
  }
  &:nth-last-child(1) {
    border-right: none;
  }
  @media ${Device.TABLET} {
    height: 56px;
  }
  @media ${Device.LAPTOP} {
    flex-grow: 1;
    justify-content: center;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 1px solid transparent;
      background-color: ${Colors.WHITE};
    `}
`;

const Title = styled.h4`
  font-size: ${FontSize.XSMALL};
  font-weight: ${fontWeight.BOLD};
  @media ${Device.TABLET} {
    font-size: ${FontSize.XXMEDIUM_L};
  }
`;
export interface NavItemProps {
  title: string;
  isActive: boolean;
  id: string;
  handleClick: (e: any) => void;
}

const NavItem: React.SFC<NavItemProps> = ({
  title,
  isActive,
  handleClick,
  id,
}) => {
  return (
    <ListItem onClick={handleClick} isActive={isActive} id={id}>
      <Title title={title} id={id}>
        {title}
      </Title>
    </ListItem>
  );
};

export default NavItem;
