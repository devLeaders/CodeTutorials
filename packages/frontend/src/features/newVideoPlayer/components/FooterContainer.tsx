import React, { ReactNode } from "react";
import styled from "styled-components";

interface IFooter {}

const FooterContainer: React.PropsWithChildren<IFooter> = (children: ReactNode) => {
  return children;
};
export default FooterContainer;
