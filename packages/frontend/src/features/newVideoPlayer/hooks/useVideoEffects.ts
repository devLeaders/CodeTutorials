import { useEffect } from 'react';
import { refsStore } from '../utils/refs.store';
import { VideoPlayerName } from '../utils/VideoPlayerEnum';
import { useMovieState } from './useMovieState';

export const useVideoEffects = (name: VideoPlayerName) => {
    const { isMinimized, videoTime } = useMovieState();

    useEffect(() => {
        if(refsStore[name]) {
            const {setCurrentTime} = refsStore[name].current;
            setCurrentTime(videoTime);
        };
        
    }, [isMinimized, name]);   
};