import * as React from 'react'
import { TouchableOpacity} from 'react-native-gesture-handler';
import { FilterList, Arrow } from './MovieListStyle'

export class HeaderTitle extends React.Component{

    render(){
        return(
            <TouchableOpacity>
                <FilterList>
                    Movies in Bengaluru
                    <Arrow source={{uri:"ic_arrow_down"}}/>
                </FilterList>
            </TouchableOpacity>
        )
    };
}
