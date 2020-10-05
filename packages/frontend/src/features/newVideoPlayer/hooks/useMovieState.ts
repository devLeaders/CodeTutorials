import { useSelector } from "react-redux";
import { IMovieState } from "../models/video.type";


export const useMovieState = () => useSelector((state: IMovieState) => state.newMovie);