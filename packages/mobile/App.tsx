import React, {Component, useReducer} from 'react';
import DrawerNavigation  from './src/config/routing/DrawerNavigation';
import { NotificationStoreProvider } from './src/features/notifications/NotificationStoreProvider';
import Orientation from 'react-native-orientation';


class App extends Component {

  constructor(props){
    super(props)
    Orientation.lockToPortrait();

    let xhr = new XMLHttpRequest();
    const url = 'https://bykowski.pl/books/v3/materials/82';

    fetch(new Request(url, {redirect: 'manual'})).then((res)=>{
      console.log(res.url);
      return res.json();
    }).then((r2)=>{
      console.log(r2)
    })
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