import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import Store from './config/redux/store'
import {VideosDTO} from '@project/common';

let t:VideosDTO;

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
