import { combineReducers } from 'redux'
import {filtersReducer} from "../../features/filters/reducer/filtersReducer"

import { movieReducer } from "./videoPlayer/reducer";
import {videoTabsReducer} from "./videoTabs/videoTabsReducer"
import {popUpsReducer} from "./popups/popupsReducer"

const rootReducer = combineReducers({movie: movieReducer, videoTabs: videoTabsReducer, popUps: popUpsReducer})

export default rootReducer