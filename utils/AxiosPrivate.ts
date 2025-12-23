import axios from "axios";


const AxiosPrivate = axios.create({
    baseURL: 'http://localhost:5000',
    // withCredentials: true,
});

export default AxiosPrivate;