import { Action, MovieActionTypes } from './types'

export function addMovie(): MovieActionTypes {
    return {
        type: Action.ADD_MOVIE
    }
}