import { useRef, useEffect } from "react";


export const useEffectAfterMount = (effect:any, deps:any[]) => {
    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
          isFirstRun.current = false;
          return;
        }
    
        if (effect) effect();
      }, deps);
};