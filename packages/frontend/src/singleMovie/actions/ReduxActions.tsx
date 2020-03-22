import { RootStateOrAny } from "react-redux";
import { createSelector } from "reselect"

export const getMovieState = (state: RootStateOrAny) => state.movie

