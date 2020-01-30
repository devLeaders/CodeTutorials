import React from 'react';
import { connect, useDispatch } from "react-redux";
import { addMovie } from '../store/movie/actions';

const CountClickComponent = () => {
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(addMovie())}>Dodaj film</button>
    )
}

class CountShow extends React.Component<any>{

    render() {
        return (
            <div>
                <p>Ilość filmów: {this.props.counter}</p>
            </div>
        )
    }
}

const CountShowComponent = connect((state: any) => {
    return {
        counter: state.movie.counter
    }
})(CountShow)

const HomePage: React.FC = (props: any) => {

    return (
        <div>
            <h1>Home</h1>
            <br></br>
            <CountShowComponent></CountShowComponent>
            <br></br>
            <CountClickComponent />
        </div>
    )
}

export default HomePage;
