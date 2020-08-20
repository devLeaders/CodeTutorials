import React, {Component} from 'react';

import DrawerNavigation  from './src/config/routing/DrawerNavigation';


class App extends Component {
  render() {
    return <DrawerNavigation />
  }
}
export default App 


  // useEffect(() => {
  //   const openApp = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });
  //   return openApp;
  // }, []);