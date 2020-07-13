import React, {useEffect, useState} from 'react';
import {View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DifrentSlaider } from '../../../common/styles/constans/DifrentEnum';
import { MoviesListExpandedType } from './MoviesType';
import {
  ImageList,
  ImageItem,
  Separator,
  ViewSeparator,
} from './SingleMovieStyle2';
import { GetVideosListExpandedV } from '../../action/conector'

type Slider = {
  listImages: Array<MoviesListExpandedType>
}

export class SliderOfImage extends React.Component<any,Slider> {
  constructor(props:any){
    super(props);
    this.state = {
      listImages : []
    }
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
  };

  private renderIt = ({item}) => this.ImgeSlaider(item)

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
              renderItem={this.renderIt}
              keyExtractor={ item => item.id}
            />
          </ImageList>
          </View>
        )
  }
}
