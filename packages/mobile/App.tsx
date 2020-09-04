import React, {Component} from 'react';

import DrawerNavigation  from './src/config/routing/DrawerNavigation';
import Orientation from 'react-native-orientation';


class App extends Component {

  constructor(props){
    super(props)
    Orientation.lockToPortrait();
  }

  render() {
    return <DrawerNavigation />
  }
}
export default App 