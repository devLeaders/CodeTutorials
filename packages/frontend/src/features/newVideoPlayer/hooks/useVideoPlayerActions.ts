import React, { useState, useImperativeHandle } from "react";
import { refsStore } from "../utils/refs.store";

export const useVideoPlayerActions = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const togglePlay = (e: any) => {
    console.log(refsStore.bigVideoPlayerRef)  
    
  };

  const cos = useImperativeHandle(refsStore.bigVideoPlayerRef?.current, () => {
    onplay: () => {}
  })

  const actions = {
    togglePlay,
  };

  const state = {
    isPaused,
  };

  return {
    actions,
    state,
  };
};
