import React from 'react';
import SquareOfMovie from './SquareOfMovie';
import {NavigationName} from '../../../../config/routing/NavigationName';

interface SquareToRenderTempProps {
  navigation: any
}
 
export default class SquareToRenderTemp extends React.Component <SquareToRenderTempProps>{
 
  render() {
    return (
      <SquareOfMovie 
      text="Which tool is better? Sketch VS Adobe XD"
      navigation={this.props.navigation}
      goto={NavigationName.SINGLEMOVIE}
      image="movie2"
      />
      
    );
  }
}
