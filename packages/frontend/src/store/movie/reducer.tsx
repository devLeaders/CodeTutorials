import {
    MovieState,
    MovieActionTypes,
    Action
} from './types'

const initialState: MovieState = {
    counter: 0
}

export const movieReducer = (state = initialState, action: MovieActionTypes) => {
    switch (action.type) {
        case Action.ADD_MOVIE: {
            return {
                counter: state.counter + 1
            }
        }
        default: {
            return state
        }
    }
}