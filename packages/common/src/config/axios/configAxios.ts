import axios from 'axios'

const instance = axios.create({
    baseURL: process.env?.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
});

export default instance