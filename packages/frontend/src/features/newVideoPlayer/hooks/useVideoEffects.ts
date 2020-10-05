import { useDispatch } from 'react-redux';
import { refsStore } from '../utils/refs.store';
import { VideoPlayerName } from '../utils/VideoPlayerEnum';
import { useEffectAfterMount } from './useEffectAfterMount'
import { useMovieState } from './useMovieState';
import { useVideoRef } from './useVideoRef';

export const useVideoEffects = (name: VideoPlayerName) => {
    const { isMinimized, smallIsPaused, bigIsPaused, videoTime } = useMovieState();
    const { togglePlay, toggleMute, toggleFullscreen } = useVideoRef(name);
    const dispatch = useDispatch();

    // console.log(name, 'outside');

    useEffectAfterMount(() => {
        // TU jest zawsze BIG
    //  console.log(name, 'hook')
        if(name === VideoPlayerName.BIG) {
        }
    }, [isMinimized]);

    useEffectAfterMount(() => {
        // TU jest zawsze BIG
        if(name === VideoPlayerName.SMALL) {
        }

    }, [isMinimized]);

    
};