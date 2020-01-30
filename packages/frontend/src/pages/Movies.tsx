import React from 'react'
import axios from 'axios'
import configAxios from '../utils/API'

export default class Movies extends React.Component {

    state = {
        persons: []
    }

    componentDidMount() {

        const persons1: any[] = []
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {

                res.data.forEach((el: any) => {
                    persons1.push(el.name)
                });

                this.setState({ persons: persons1 })
            })

            .catch(err => {
                console.log('error')
            })
    }

    render() {
        return (
            <div>
                <h1>Filmy</h1>
                <br />
                <h2>Aktorzy:</h2>
                <br />
                {this.state.persons.map(person => <li>{person}</li>)}
            </div>
        )
    }
}