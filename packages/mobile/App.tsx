import React, {Component, useReducer} from 'react';

import DrawerNavigation  from './src/config/routing/DrawerNavigation';
import { NotificationStore } from './src/features/notifications/NotificationsStore';

class App extends Component {
  
  render() {
    return (
      <NotificationStore>
        <DrawerNavigation />
      </NotificationStore>
    )
  }
}
export default App 