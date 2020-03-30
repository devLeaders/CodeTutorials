import * as React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../../common/styles/constans/DifrentEnum';
import { MoviesListSimpleType } from './MoviesType';
import {  
  ViewSeparator,
  ImageSlaider,
} from './MovieListStyle';
import { GetVideosList } from '../../action/conector';

 type SlaiderLargeS = {
  listVideos: Array<MoviesListSimpleType>
 }

export class SlaiderLarge extends React.Component<any,SlaiderLargeS>{
  constructor(props:any){
    super(props);
    this.state = {
      listVideos : []
    }
    this.Separator = this.Separator.bind(this);
    this.ImgeSlaider = this.ImgeSlaider.bind(this);
  }

  componentDidMount(){
    const listVideos =  GetVideosList();
    this.setState ({
      listVideos
    })
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
                data={this.state.listVideos} 
                renderItem={({item})=>this.ImgeSlaider(item)}
                keyExtractor={ item => item.id }
              /> 
        )
    }
}