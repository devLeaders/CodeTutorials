import { useSelector } from 'react-redux';
import { IMovieState } from '../models/video.type';
import { VideoPlayerName } from '../utils/VideoPlayerEnum';
import { useEffectAfterMount } from './useEffectAfterMount'

export const useVideoEffects = (name:string) => {
    const { isMinimized } = useSelector((state: IMovieState) => state.newMovie);

    useEffectAfterMount(() => {
        if(name === VideoPlayerName.BIG) {

        }

    }, [isMinimized])
};