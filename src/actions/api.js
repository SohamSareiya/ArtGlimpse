import axios from 'axios';

const API_URL = 'http://localhost:8081/api/auth';

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;
