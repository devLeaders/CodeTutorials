import React, { ReactNode } from "react";

interface IVideo {}

const Video: React.PropsWithChildren<IVideo> = (children: ReactNode) => {
  return children;
};
export default Video;
