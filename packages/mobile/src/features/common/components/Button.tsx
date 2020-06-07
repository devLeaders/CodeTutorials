import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  color:string,
  title:string,
  onPress:()=>void
}

export default class Btn extends Component<Props> {
  render() {
    return (
      <TouchableOpacity style={[s.button, {backgroundColor: this.props.color || '#FFF'}]} onPress={this.props.onPress}>
        <Text style={{color:'#FFF'}}>{this.props.title || "Button"}</Text>
      </TouchableOpacity>
    );
  }
}

const s = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10
  }
});