import { useState, useEffect, useCallback } from "react";
export const useVisibleHeader = (isMoviePaused: boolean, hide?: boolean) => {
  const [visible, setVisible] = useState<boolean>(true);
  const handleHeaderVisiblity = useCallback(() => {
    if (!isMoviePaused && hide) return setVisible(false);
    else return setVisible(true);
  },[isMoviePaused, hide]);
  useEffect(() => {
    handleHeaderVisiblity();
  
  }, [isMoviePaused, handleHeaderVisiblity]);
  return visible;
};
