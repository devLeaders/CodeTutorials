import React from 'react';
import { useVideoPlayerContext } from '../../hooks/useVideoPlayerContext';
import Time from '../DumbComponents/Time';

const VideoDuration:React.FC = () => {
// const { state: {videoTime} } = useVideoPlayerContext();
// console.log(videoTime);
// const currentTime = moment(videoTime, "ss").format("mm:ss");
return <Time text={'00:00'}/>
}
export default VideoDuration