import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

// first we will make a new context
const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true,
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
              age: this.state.age + 1,
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <View>
    <Person />
  </View>
)

class Person extends Component {
  render() {
    return (
      <View>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <Text>Age: {context.state.age}</Text>
              <Text>Name: {context.state.name}</Text>
              <Button
              color="#e63900"
              title="GrowUP" 
              onPress={() => context.growAYearOlder} />
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </View>
    )
  }
}


class ContextAPIHome extends Component {
  render() {
    return (
      <MyProvider>
        <View>
          <Text>I am the app</Text>
          <Family />
        </View>
      </MyProvider>
    );
  }
}

export default ContextAPIHome;