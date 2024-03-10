import axios from 'axios';
import useAuthStore from './store';

const API_BASE_URL = 'http://localhost:3001/api/';


const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});


api.interceptors.request.use( ( config ) => {
    const token = useAuthStore.getState().token;

    if ( token ) {
        config.headers!.Authorization = `Bearer ${token}`;
    }

    return config;

});


export default api;