import React, { ReactNode } from "react";

interface IPlayBtn {}

const PlayBtn: React.PropsWithChildren<IPlayBtn> = (children: ReactNode) => {
  return <>{children}</>;
};
export default PlayBtn;
