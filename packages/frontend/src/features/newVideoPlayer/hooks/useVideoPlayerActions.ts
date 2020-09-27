import { useState } from 'react';
import { refsStore } from "../utils/refs.store";

export const useVideoPlayerActions = () => {
    const [isPaused, setIsPaused] = useState()
    const togglePlay = () => {

    }


    const actions = {
        togglePlay
    }

    const state = {
        isPaused
    }

    return {
        actions,
        state
    }
};
