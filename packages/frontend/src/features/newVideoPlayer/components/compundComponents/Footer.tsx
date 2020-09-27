import React, { ReactNode } from "react";

interface IFooter {}

const FooterContainer: React.PropsWithChildren<IFooter> = (children: ReactNode) => {
  return children;
};
export default FooterContainer;
