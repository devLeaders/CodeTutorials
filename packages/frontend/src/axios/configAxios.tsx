import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3300',
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
});

export default instance