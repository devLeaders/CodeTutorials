import * as React from 'react'
import { TouchableOpacity} from 'react-native-gesture-handler';
import { PlayButton, Triangle } from './SingleMovieStyle2';
import player from '../../../assets/img/player.jpg';
import play from '../../../assets/img/back_arrow2.png';

export class HeaderLeft extends React.Component{

    render(){
        return( 
        <TouchableOpacity>
            <PlayButton>
            <Triangle source={play} />
          </PlayButton>
          </TouchableOpacity>
        )
    };
}