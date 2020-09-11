import React, {Component, useReducer} from 'react';
import DrawerNavigation  from './src/config/routing/DrawerNavigation';
import { NotificationStoreProvider } from './src/features/notifications/NotificationStoreProvider';
import Orientation from 'react-native-orientation';


class App extends Component {

  constructor(props){
    super(props)
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <NotificationStoreProvider>
        <DrawerNavigation />
      </NotificationStoreProvider>
    )
  }
}
export default App 