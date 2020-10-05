import React from 'react';
import moment from 'moment';
import { useVideoPlayerContext } from '../../hooks/useVideoPlayerContext';
import Time from '../DumbComponents/Time';

const CurrentTime:React.FC = () => {
    const { state: {videoTime} } = useVideoPlayerContext();
    const currentTime = moment(videoTime, "ss").format("mm:ss");
    return <Time text={currentTime}/>
}
export default CurrentTime