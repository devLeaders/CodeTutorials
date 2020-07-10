import * as React from 'react';
import { Animated } from 'react-native';
import { MoviesListSimpleType } from './MoviesType';
import {  
  ViewSeparator,
  ImageSlaider,
} from './MovieListStyle';
import { GetVideosList } from '../../action/conector';

interface ImageSlaiderProps {
    y: Animated.Value;
    index: number;
    item:MoviesListSimpleType
}

const ImgeSlaider = ({item, y, index}:ImageSlaiderProps) => {
    console.log("x=",y);
    console.log('item=',item);
    console.log('index=', index);
    const position = Animated.subtract(index * 200,y);
    const isDisappearing = -200;
    const isLeft = 0;
    const isRight = 200 - 100;
    const isAppearing = 200;
    const translateX = Animated.add(
      Animated.add(
        y,
        y.interpolate({
          inputRange: [0, index * 200],
          outputRange: [0, -index *200],
          extrapolateRight: 'clamp'
        })
      ),
        position.interpolate({
          inputRange: [isRight, isAppearing],
          outputRange: [0, -index * 200],
          extrapolateRight: 'clamp',
        }),
    );
    const scale = position.interpolate({
      inputRange: [isDisappearing, isLeft, isRight, isAppearing],
      outputRange: [0.5, 1, 1, 0.5],
      extrapolate: 'clamp'
    })
    const opacity = position.interpolate({
      inputRange: [isDisappearing, isLeft, isRight, isAppearing],
      outputRange: [0.5, 1, 1, 0.5],
    })

    return(
      <Animated.View style={{ transform: [{translateX}]}}>
        <ImageSlaider source={{uri: item.uri}}/>
      </Animated.View>
    )
  }

  export default ImgeSlaider