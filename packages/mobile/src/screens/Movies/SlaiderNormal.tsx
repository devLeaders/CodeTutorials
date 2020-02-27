import * as React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../variables/DifrentEnum';
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
import { GetVideosListExpandedV } from '../../api/conector';

type SlaiderNormalS = {
    listVideos: Array<MoviesListExpandedType>
  }
export class SlaiderNormal extends React.Component<any,SlaiderNormalS>{
  constructor(props:any){
    super(props);
    this.state = {
      listVideos : []
    }
    this.Separator = this.Separator.bind(this);
    this.ImgeSlaider = this.ImgeSlaider.bind(this);
  }

  public Separator = () => (<ViewSeparator/>)
  public ImgeSlaider = (item:MoviesListExpandedType) => (
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

  render(){
        return(
            <FlatList 
            snapToAlignment={"start"}
            snapToInterval={DifrentSlaider.WIDTHNORMAL + 10}
            decelerationRate={"fast"}
            ItemSeparatorComponent={this.Separator} 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.state.listVideos} 
            renderItem={({item}) => this.ImgeSlaider(item)} 
            keyExtractor={ item => item.id }
          /> 
        )
    }
}