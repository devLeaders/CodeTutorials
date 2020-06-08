import * as React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../../common/styles/constans/DifrentEnum';
import { MoviesListExpandedType } from './MoviesType';
import {  
    ViewSeparator,
    ImageSecondSlaider,
    GroupForDescription,
    IcHeart,
    ItemLike,
    GroupCenter,
    ViewTitle,
  } from './MovieListStyle';
import { GetVideosListExpandedV } from '../../action/conector';

type SlaiderNormalS = {
    listVideos: Array<MoviesListExpandedType>
  }
export class SlaiderNormal extends React.Component<any,SlaiderNormalS>{
  constructor(props:any){
    super(props);
    this.state = {
      listVideos : []
    }
  }

  public separator = () => (<ViewSeparator/>)
  public imgeSlaider = (item:MoviesListExpandedType) => (
    <View>
        <ImageSecondSlaider source={{uri: item.uri}}/>
          <GroupForDescription>
              <IcHeart source={{uri:'ic_heart'}}/>
              <ItemLike>{item.like}</ItemLike>
            </GroupForDescription>
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

  private renderIt = ({item}) => this.imgeSlaider(item)

  render(){
        return(
            <FlatList 
            snapToAlignment={"start"}
            snapToInterval={DifrentSlaider.WIDTHNORMAL + 10}
            decelerationRate={"fast"}
            ItemSeparatorComponent={this.separator} 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.state.listVideos} 
            renderItem={this.renderIt} 
            keyExtractor={ item => item.id }
          /> 
        )
    }
}