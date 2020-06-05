import React, {useEffect, useState} from 'react';
import {View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../../common/styles/constans/DifrentEnum';
import { MovieDescript, MoviesListExpandedType } from './MoviesType';
import {
  ImageList,
  ImageItem,
  ViewSeparator,
} from './SingleMovieStyle2';
import { GetVideosListExpandedV } from '../../action/conector';



type DesLeft = {
  listVideos: Array<MoviesListExpandedType>
}

export class DescriptionLeft extends React.Component<any,DesLeft> {
  constructor(props:any){
    super(props);
    this.state = {
      listVideos : []
    }
  }

  public Separator = () => (<ViewSeparator/>)
  public ImgeSlaider = (item:MovieDescript) => (
    <View>
        <ImageItem source={{uri: item.uri}}/>
    </View>
  )

  componentDidMount(){
    const listVideos =  GetVideosListExpandedV();
    this.setState ({
      listVideos
    })
  }

  desLeft = ()=>{
    return null;
  }

  public renderItem = ({item}) => this.desLeft(item)

  render(){
        return (
            <View>
            <ImageList>
            <FlatList
              snapToAlignment={"start"}
              snapToInterval={DifrentSlaider.WIDTHNORMAL + 10}
              decelerationRate={"fast"}
              ItemSeparatorComponent={this.Separator}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={this.state.listVideos}
              renderItem={this.renderItem}
              keyExtractor={ item => item.id}
            />
          </ImageList>
          </View>
        )
  }
}
