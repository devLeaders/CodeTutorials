import React from 'react';
import {FlatList} from 'react-native';
//Images
import player from '../../../assets/img/player.jpg';
import back_arrow from '../../../assets/img/back_arrow2.png';
import h from '../../../assets/img/h.png';
import play from '../../../assets/img/play_brown.png';
import {
  Container,
  Player,
  PlayerImage,
  BackButton,
  BackArrowImage,
  ColumContainerLeft,
  ColumContainerRight,
  ImageList,
  ImageItem,
  MovieName,
  MovieKind,
  RowContainer,
  Background,
  MovieTime,
  Owerview,
  Description,
  Heart,
  HeartRatio,
  RatioContainer,
  Separator,
  ViewImage,
  StarsContainer,
  Star,
  VoteText,
  PlayButton,
  Triangle,
} from './SingleMovieStyle2';
import { DATA, IMAGES } from './ExampleData';

export class SliderOfImage extends React.Component {
    render(){
        return (
            <View>
            <ImageList>
            <FlatList
              ItemSeparatorComponent={() => <Separator />}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={DATA}
              renderItem={({item}) => (
                <ViewImage>
                  <ImageItem source={{uri: item.uri}} />
                </ViewImage>
              )}
              keyExtractor={item => item.id}
            />
          </ImageList>
          </View>
        )
  }
}