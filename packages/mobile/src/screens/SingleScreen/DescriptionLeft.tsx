import React, {useEffect, useState} from 'react';
import {View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../variables/DifrentEnum';
import { MovieDescript } from './MoviesType';
import {
  ImageList,
  ImageItem,
  Separator,
  ViewSeparator,
} from './SingleMovieStyle2';
import { GetVideosListExpandedV } from '../../api/conector'

type DesLeft = {
  listVideos: Array<MovieDescript>
}

export class DescriptionLeft extends React.Component<any,DesLeft> {
  constructor(props:any){
    super(props);
    this.state = {
      listVideos : []
    }
    this.Separator = this.Separator.bind(this);
    this.ImgeSlaider = this.ImgeSlaider.bind(this);
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
              renderItem={({item}) => this.DesLeft(item)}
              keyExtractor={ item => item.id}
            />
          </ImageList>
          </View>
        )
  }
}
