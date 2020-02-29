import React from 'react';
import { useDispatch } from "react-redux";
import { addMovie } from '../store/movie/actions';

const CountClickComponent = () => {
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(addMovie())}>Dodaj film</button>
    )
}

export default CountClickComponent;
