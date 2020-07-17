import * as React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../../common/styles/constans/DifrentEnum';
import { MoviesListExpandedType } from './MoviesType';
import {  
    ViewSeparator,
    ImageTherdSlaider,
    IcHeart,
    ItemLike,
    GroupCenter,
    ViewTitle,
  } from './MovieListStyle';
import { GetVideosListExpandedV } from '../../action/conector';

  type SlaiderSmallS = {
    listVideos: Array<MoviesListExpandedType>
  }
export class SlaiderSmall extends React.Component<any,SlaiderSmallS>{
  constructor(props:any){
    super(props);
    this.state = {
      listVideos : []
    }
  }

  public Separator = () => (<ViewSeparator/>)
  public ImgeSlaider = (item:MoviesListExpandedType) => (
    <View>
        <ImageTherdSlaider source={{uri: item.uri}}/>
        <GroupCenter>
            <IcHeart source={{uri:'ic_heart'}}/>
            <ItemLike>{item.like}</ItemLike>
          </GroupCenter>
          <GroupCenter>
            <ViewTitle>{item.title}</ViewTitle>
          </GroupCenter>
    </View>
  )

  componentDidMount(){
    const listVideos =  GetVideosListExpandedV();
    this.setState ({
      listVideos
    })
  }

  private renderIt = ({item}) => this.ImgeSlaider(item)

  render(){
        return(
            <FlatList 
              snapToAlignment={"start"}
              snapToInterval={DifrentSlaider.WIDTHSMALL + 10}
              decelerationRate={"fast"}
              ItemSeparatorComponent={this.Separator} 
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={this.state.listVideos} 
              renderItem={this.renderIt} 
              keyExtractor={ item => item.id }
          /> 
        )
    }
}