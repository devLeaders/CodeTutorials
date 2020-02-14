import * as React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../variables/DifrentEnum';
import { DATA } from './ExampleData';
import {  
  ViewSeparator,
  ImageSlaider,
} from './MovieListStyle';

export class SlaiderLarge extends React.Component{

    render(){
        return(
            <FlatList 
                snapToAlignment={"start"}
                snapToInterval={DifrentSlaider.WIDTHLARGE + 10}
                decelerationRate={"fast"}
                style={{marginTop: 27}}
                ItemSeparatorComponent={()=><ViewSeparator/>} 
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={DATA} 
                renderItem={({item}) =>(
                  <View>
                      <ImageSlaider source={{uri: item.uri}}/>
                  </View>
              )} 
                keyExtractor={ item => item.id }
              /> 
        )
    }
}