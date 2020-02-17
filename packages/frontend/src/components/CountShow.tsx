import React from 'react';
import { connect} from "react-redux";

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


export default CountShowComponent;
