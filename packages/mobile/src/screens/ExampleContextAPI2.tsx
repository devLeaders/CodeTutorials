import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// create a context
const MyContext = React.createContext();

// create a provider
class MyProvider extends Component {
  state = {
    name: "Michal",
    age: 18,
    cool: true
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growYearOlder: () => {
            this.setState({ age: this.state.age + 1 });
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default class ExampleContextAPI2 extends Component {
  render() {
    return (
      <MyProvider>
        <View style={styles.container}>
          <Family />
        </View>
      </MyProvider>
    );
  }
}

class Person extends Component {
  render() {
    return (
      <View>
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <Text>Name {context.state.name}</Text>
              <Text>Age {context.state.age}</Text>
              <Text>Cool {context.state.name}</Text>
              <Button onPress={context.growYearOlder} title="grow a year" />
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </View>
    );
  }
}

// the parenthesis let's us get ride of return
const Family = props => (
  <View>
    <Person />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});