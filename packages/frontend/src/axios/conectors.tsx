import axiosConfig from './configAxios'
import axios from 'axios'

export function getActors() {
    return axios.get(axiosConfig.defaults.baseURL + `/users`)
}

