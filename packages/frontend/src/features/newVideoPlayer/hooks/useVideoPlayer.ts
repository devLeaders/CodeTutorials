import {useState, useCallback} from "react"
import {refsStore} from "../utils/refs.store"

export const useVideoPlayer = () => {
    const [isPaused, setIsPaused] = useState(true)
    const [isMuted, setIsMuted] = useState(false)
    
    const togglePlay = useCallback(() => {
        const {play, pause} = refsStore.bigVideoPlayerRef.current
        isPaused ? play() : pause()
        setIsPaused(!isPaused)
    },[isPaused])

    const toggleMute = useCallback(() => {
        let {toggleMuted} = refsStore.bigVideoPlayerRef.current
        toggleMuted(!isMuted)
        setIsMuted(!isMuted)
    },[isMuted])


    const actions = {
        togglePlay,
        toggleMute
    }

    const state = {
        isPaused,
        isMuted
    }

    return {
        actions,
        state
    }
}