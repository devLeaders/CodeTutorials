
import { combineReducers } from 'redux'
import {filtersReducer} from "../../features/filters/reducer/filtersReducer"

const rootReducer = combineReducers({filters: filtersReducer})

export default rootReducer