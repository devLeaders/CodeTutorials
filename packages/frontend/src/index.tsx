import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import Store from './config/redux/store'
import {axiosInit} from './config/axios/axiosInit';
// //AxiosInstance.defaults.baseURL = ''
// console.log(process.env?.REACT_APP_API_URL);

axiosInit();

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
