export interface MovieState {
    counter: number
}

export enum Action {
    ADD_MOVIE = 'ADD_MOVIE'
}

interface AddMovieAction {
    type: Action.ADD_MOVIE,
}

export type MovieActionTypes = AddMovieAction