import { useState, useEffect } from "react";
export const useVisibleHeader = (isMoviePaused: boolean, hide?: boolean) => {
  const [visible, setVisible] = useState<boolean>(true);
  const handleHeaderVisiblity = () => {
    if (!isMoviePaused && hide) return setVisible(false);
    else return setVisible(true);
  };
  useEffect(() => {
    handleHeaderVisiblity();
  }, [isMoviePaused]);
  return visible;
};
