import axios from 'axios';
const instance = axios.create({
baseURL: 'http://api-productos.test/api'
});


export default instance;