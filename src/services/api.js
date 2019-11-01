import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.98.2.48:3333/api/v1',
});

export default api;
