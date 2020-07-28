import React from 'react';
import { View } from 'react-native';
import BigSquareOfMovie from './BigSquareOfMovie';
import SmallSquareOfMovie from './SmallSquareOfMovie';
import {NavigationName} from '../../../../config/routing/NavigationName';

interface SquareToRenderTempProps {
  navigation: any
}
 
export default class SquareToRenderTemp extends React.Component <SquareToRenderTempProps>{
 
  render() {
    return ( <View>
      <BigSquareOfMovie 
      text="Which tool is better? Sketch VS Adobe XD"
      navigation={this.props.navigation}
      goto={NavigationName.SINGLEMOVIE}
      image="movie2"
      />

      <SmallSquareOfMovie 
      text="Which tool is better? Sketch VS Adobe XD"
      navigation={this.props.navigation}
      goto={NavigationName.SINGLEMOVIE}
      image="movie2"
      />
      </View>
    );
  }
}
