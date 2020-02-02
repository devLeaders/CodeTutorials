import React from 'react'
<<<<<<< HEAD
import axiosConfig from '../axios/configAxios'
import MoviesTypes from '../pages/MoviesTypes.d'


export default class Movies extends React.Component<any, MoviesTypes> {
=======
import axios from 'axios'
import configAxios from '../utils/API'

export default class Movies extends React.Component {
>>>>>>> c4f754b8b4b942410ea67131c603a20a43312d69

    state = {
        persons: []
    }

    componentDidMount() {

        const persons1: any[] = []
<<<<<<< HEAD
        axiosConfig.get(axiosConfig.defaults.baseURL + `/users`)
=======
        axios.get(`https://jsonplaceholder.typicode.com/users`)
>>>>>>> c4f754b8b4b942410ea67131c603a20a43312d69
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
<<<<<<< HEAD
                {this.state.persons.map(person => <li key={person}>{person}</li>)}
=======
                {this.state.persons.map(person => <li>{person}</li>)}
>>>>>>> c4f754b8b4b942410ea67131c603a20a43312d69
            </div>
        )
    }
}