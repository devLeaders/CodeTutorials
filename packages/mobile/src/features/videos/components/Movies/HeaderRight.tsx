import * as React from 'react'
import { TouchableOpacity} from 'react-native-gesture-handler';
import { Search } from './MovieListStyle'

export class HeaderRight extends React.Component{

    render(){
        return(
          <TouchableOpacity >
            <Search source={{uri:'ic_search'}}/>
          </TouchableOpacity> 
        )
    };
}
