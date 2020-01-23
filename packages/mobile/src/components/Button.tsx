import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Btn extends Component {

  render() {

    return (
      <TouchableOpacity style={[s.button, {backgroundColor: this.props.color || '#FFF'}]} onPress={this.props.onPress}>
        <Text style={{color:'#FFF'}}>{this.props.title || "Button"}</Text>
      </TouchableOpacity>
    ); //return
  } //render

} //App

const s = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10
  }
});