import axios from "axios";

const instance = axios.create({
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default instance;
