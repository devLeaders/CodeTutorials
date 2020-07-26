import axios from 'axios'

const instance = axios.create({
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
});

export default instance