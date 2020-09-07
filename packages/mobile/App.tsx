import React, {Component, useReducer} from 'react';

import DrawerNavigation  from './src/config/routing/DrawerNavigation';
import { NotificationStoreProvider } from './src/features/notifications/NotificationStoreProvider';

class App extends Component {
  
  render() {
    return (
      <NotificationStoreProvider>
        <DrawerNavigation />
      </NotificationStoreProvider>
    )
  }
}
export default App 