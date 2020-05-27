
import { combineReducers } from 'redux'
import {filtersReducer} from "../../features/filters/reducer/FiltersReducer"

const rootReducer = combineReducers({filters: filtersReducer})

export default rootReducer