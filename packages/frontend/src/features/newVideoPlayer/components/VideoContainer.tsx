import React, { ReactNode } from "react";
import styled from "styled-components";

interface IVideo {}

const VideoContainer: React.PropsWithChildren<IVideo> = (children: ReactNode) => {
  return children;
};
export default VideoContainer;
