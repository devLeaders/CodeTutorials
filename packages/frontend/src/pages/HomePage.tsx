import React from 'react';
<<<<<<< HEAD
import CountShow from '../components/CountShow'
import CountClickComponent from '../components/CountClickComponent'
=======
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
>>>>>>> c4f754b8b4b942410ea67131c603a20a43312d69

const HomePage: React.FC = (props: any) => {

    return (
        <div>
            <h1>Home</h1>
            <br></br>
<<<<<<< HEAD
            <CountShow></CountShow>
=======
            <CountShowComponent></CountShowComponent>
>>>>>>> c4f754b8b4b942410ea67131c603a20a43312d69
            <br></br>
            <CountClickComponent />
        </div>
    )
}

export default HomePage;
