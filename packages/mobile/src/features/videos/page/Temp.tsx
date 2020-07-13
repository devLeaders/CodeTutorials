import React from 'react';
import SquareOfMovie from '../components/MainScreen/BigSquareOfMovie';

interface TempP {
  navigation: any
}
 
export default class Temp extends React.Component <TempP>{
 
  render() {
    return (
      <SquareOfMovie 
      text="Informacje"
      navigation={this.props.navigation}
      goto={NavigationName.HOME}
      image="info"
      />

      
    );
  }
}
