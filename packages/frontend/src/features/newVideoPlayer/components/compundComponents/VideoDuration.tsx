import moment from 'moment';
import React from 'react';
import { useVideoPlayerContext } from '../../hooks/useVideoPlayerContext';
import { refsStore } from '../../utils/refs.store';
import Time from '../DumbComponents/Time';

const VideoDuration:React.FC = () => {
const { name } = useVideoPlayerContext();
const video = refsStore[name]?.current;
const convertedTime = moment(video?.videoDuration, "ss").format("mm:ss");
const time = convertedTime === 'Invalid date' ? '00:00' : convertedTime
return <Time text={time}/>
}
export default VideoDuration