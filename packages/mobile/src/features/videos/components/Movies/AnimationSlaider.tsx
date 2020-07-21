import * as React from 'react';
import { Animated, Dimensions } from 'react-native';
import { MoviesListSimpleType } from './MoviesType';
import {  
  ImageSlaider,
} from './MovieListStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationName } from '../../../../config/routing/NavigationName';

interface AnimationSlaiderType {
    x: Animated.Value,
    item: MoviesListSimpleType,
    index: any,
    navigation?:any
}

export const AnimationSlaider = ({item, index, x, navigation}:AnimationSlaiderType) => {
    const { width } = Dimensions.get('window')
    const wCard = width -90 ;
    const position = Animated.subtract(index * wCard,x);
    const isDisappearing = -width;
    const isLeft = 0;
    const isRight =  width - 20;
    const isAppearing = width * 2;
    const scale = position.interpolate({
      inputRange: [isDisappearing, isLeft, isRight, isAppearing],
      outputRange: [0.4,1,0.8,0.8],
      extrapolate: 'clamp'
    })
    const opacity = position.interpolate({
      inputRange: [isDisappearing, isLeft, isRight, isAppearing],
      outputRange: [0.4,1,0.3,0.5],
    })

    const navToSingleMovie = () => {navigation.navigate(NavigationName.SINGLEMOVIE)}

    return(
      <TouchableOpacity onPress={navToSingleMovie}>
        <Animated.View >
          <ImageSlaider style={{ opacity, transform: [{ scale }]}} source={{uri: item.uri}}/>
        </Animated.View>
      </TouchableOpacity>
    )
  }
