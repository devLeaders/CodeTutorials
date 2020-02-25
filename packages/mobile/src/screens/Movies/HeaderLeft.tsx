import * as React from 'react'
import { TouchableOpacity} from 'react-native-gesture-handler';
import { Hamburger } from './MovieListStyle'

export class HeaderLeft extends React.Component{

    render(){
        return(
            <TouchableOpacity >
                <Hamburger source={{uri:'ic_menu'}}/>
          </TouchableOpacity> 
        )
    };
}
