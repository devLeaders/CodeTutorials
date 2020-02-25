import React, {useEffect, useState} from 'react';
import {View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../variables/DifrentEnum';
import { MoviesListExpandedType } from './MoviesType';
import {
  ImageList,
  ImageItem,
  Separator,
  ViewSeparator,
} from './SingleMovieStyle2';
import { GetVideosListExpandedV } from '../../api/conector'

type Slider = {
  listImages: Array<MoviesListExpandedType>
}

export class SliderOfImage extends React.Component<any,Slider> {
  constructor(props:any){
    super(props);
    this.state = {
      listImages : []
    }
    this.Separator = this.Separator.bind(this);
    this.ImgeSlaider = this.ImgeSlaider.bind(this);
  }

  public Separator = () => (<ViewSeparator/>)
  public ImgeSlaider = (item:MoviesListExpandedType) => (
    <View>
        <ImageItem source={{uri: item.uri}}/>
    </View>
  )

  componentDidMount(){
    const listImages =  GetVideosListExpandedV();
    this.setState ({
      listImages
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
              data={this.state.listImages}
              renderItem={({item}) => this.ImgeSlaider(item)}
              keyExtractor={ item => item.id}
            />
          </ImageList>
          </View>
        )
  }
}
