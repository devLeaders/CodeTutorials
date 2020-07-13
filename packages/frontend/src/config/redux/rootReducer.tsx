import { combineReducers } from 'redux'

import { movieReducer } from "./videoPlayer/reducer";
import {videoTabsReducer} from "./videoTabs/videoTabsReducer"

const rootReducer = combineReducers({movie: movieReducer, videoTabs: videoTabsReducer})

export default rootReducer