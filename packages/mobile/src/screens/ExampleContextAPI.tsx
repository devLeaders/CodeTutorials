import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Btn from '../components/Button';

const AppContext = React.createContext();

class AppProvider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      reset: () => {
        this.setState({value: 0});
      },
      increase: () => {
        this.setState({value: this.state.value + 1});
      },
      decrease: () => {
        this.setState({value: this.state.value - 1});
      }
    } //state
  } //constructor

  render() {

    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    ); //return

  } //render

} //AppProvider

export default class ExampleContextAPI extends Component {

  render() {

    return (
      <AppProvider>
        <View style={[s.container, {borderColor: 'black',top: 20}]}>

          <AppContext.Consumer>
            {(context) => {
              return (
                <View style={{flex: 1,flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row',height: 50,borderColor: 'gray',borderWidth: 1,margin: 10}}>
                    <Text>MAIN COMPONENT : {context.value}</Text>
                    <Btn color="gray" title="Reset To Default" onPress={context.reset}/>
                  </View>
                  <View style={{flex: 1,flexDirection: 'row'}}>
                    <Right/>
                    <Left/>
                  </View>
                </View>
              );//return
            }//context
            }
          </AppContext.Consumer>

        </View>
      </AppProvider>
    ); //return

  } //render

} //App

const Left = () => {
  return (
    <View style={[s.container, {borderColor: 'red'}]}>
      <AppContext.Consumer>
        {(context) => {
          return (
            <View style={{flex: 1}}>
              <Text>LEFT COMP : {context.value}</Text>
              <Btn color="red" title="Increase" onPress={context.increase}/>
            </View>
          );//return
        }//context
        }
      </AppContext.Consumer>
    </View>
  ); //return
} // Left

const Right = (props) => {
  return (
    <View style={[s.container, {borderColor: 'blue'}]}>
      <AppContext.Consumer>
        {(context) => {
          return (
            <View style={{flex: 1}}>
              <Text> RIGHT COMP : {context.value}</Text>
              <Btn color="blue" title="Decrease" onPress={context.decrease}/>
            </View>
          ); //return
        }//context
        }
      </AppContext.Consumer>
    </View>
  ) //return
} // Right

const s = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderWidth: 1
  }
});