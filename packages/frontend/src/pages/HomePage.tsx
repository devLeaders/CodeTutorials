import React from 'react';
import CountShow from '../components/CountShow'
import CountClickComponent from '../components/CountClickComponent'

const HomePage: React.FC = (props: any) => {

    return (
        <div>
            <h1>Home</h1>
            <br></br>
            <CountShow></CountShow>
            <br></br>
            <CountClickComponent />
        </div>
    )
}

export default HomePage;
