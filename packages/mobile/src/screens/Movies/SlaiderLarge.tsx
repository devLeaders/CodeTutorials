import * as React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../variables/DifrentEnum';
import { DATA } from './ExampleData';
import { MoviesListSimpleType } from './MoviesType';
import {  
  ViewSeparator,
  ImageSlaider,
} from './MovieListStyle';



export class SlaiderLarge extends React.Component{
  constructor(props){
    super(props);
    this.Separator = this.Separator.bind(this);
    this.ImgeSlaider = this.ImgeSlaider.bind(this);
  }

  public Separator = () => (<ViewSeparator/>)
  public ImgeSlaider = (item:MoviesListSimpleType) => (
    <View>
      <ImageSlaider source={{uri: item.uri}}/>
    </View>
  )

    render(){
        return(
            <FlatList 
                snapToAlignment={"start"}
                snapToInterval={DifrentSlaider.WIDTHLARGE + 10}
                decelerationRate={"fast"}
                style={{marginTop: 27}}
                ItemSeparatorComponent={this.Separator}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={DATA} 
                renderItem={({item})=>this.ImgeSlaider(item)}
                keyExtractor={ item => item.id }
              /> 
        )
    }
}