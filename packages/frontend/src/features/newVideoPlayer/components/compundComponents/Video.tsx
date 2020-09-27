import React, { ReactNode } from "react";
import { useVideoPlayerContext } from "../../hooks/useVideoPlayerContext";

interface IVideo {
  children: ReactNode;
}
interface IDumbVideo {
  togglePlay(): void;
  state: {
    isPaused: boolean;
  };
}

const Video: React.FC<IVideo> = ({ children }) => {
  const {
    actions: { togglePlay },
    state,
  } = useVideoPlayerContext();

  const childrenWithProps = React.Children.map(children, (child) => {
    const props: IDumbVideo = { togglePlay, state };
    if (React.isValidElement(child)) {
      return  React.cloneElement(child, props)
    }  
  });

 
  return <>{childrenWithProps}</>;
};
export default Video;
