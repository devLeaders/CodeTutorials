import { movieReducer } from './movie/reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    movie: movieReducer,
})

export default rootReducer