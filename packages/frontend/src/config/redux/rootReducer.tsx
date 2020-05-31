
import { combineReducers } from 'redux'
import {asideTypeReducer} from './reducers/asideTypeReducer'
const rootReducer = combineReducers({
    asideType:asideTypeReducer,
})

export default rootReducer