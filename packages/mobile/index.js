/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {axiosInit} from './src/config/axios/axiosInit';

axiosInit();
AppRegistry.registerComponent(appName, () => App);
