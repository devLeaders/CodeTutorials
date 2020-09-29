import * as React from 'react';
import { Animated, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationName } from '../../../../config/routing/NavigationName';
import { useNavigation } from '@react-navigation/native';
import BigSquareOfMovie from './BigSquareOfMovie'
import { IVideosRespons } from '@project/common/src/videos/models'
import  { ImageUtil } from './ImageUtils'

interface AnimationSlaiderType {
    x: Animated.Value,
    item: IVideosRespons,
    index: number,
}

export const AnimationSlaider = ({item, index, x}:AnimationSlaiderType) => {
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

    const navigation = useNavigation();
    const navToSingleMovie = () => {
        navigation.navigate(NavigationName.SINGLEMOVIE,
        {itemId: item.id})
    }
    
    return(
      <TouchableOpacity onPress={navToSingleMovie} key={item.id}>
       <Animated.View style={{ opacity, transform: [{ scale }]}}>
          <BigSquareOfMovie 
            text = {item.title}
            onPress= {navToSingleMovie}
            image = {ImageUtil.getImageFromServer(item.urlPhoto)}
          />
      </Animated.View>
      </TouchableOpacity>
    )
  }

  