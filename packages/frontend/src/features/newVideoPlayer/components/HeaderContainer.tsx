import React, { ReactNode } from "react";
import styled from "styled-components";

interface IHeader {}

const HeaderContainer: React.PropsWithChildren<IHeader> = (children: ReactNode) => {
  return children;
};
export default HeaderContainer;
