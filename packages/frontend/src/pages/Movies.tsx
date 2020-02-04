import React from 'react'
import axiosConfig from '../axios/configAxios'
import { getActors } from '../axios/conectors'
import MoviesTypes from '../pages/MoviesTypes.d'


export default class Movies extends React.Component<any, MoviesTypes> {

    state = {
        persons: []
    }

    componentDidMount() {

        const persons1: any[] = []
        getActors()
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
                {this.state.persons.map(person => <li key={person}>{person}</li>)}
            </div>
        )
    }
}