import axios from 'axios';
import variables from '~/config/variables';

const api = axios.create({
  baseURL: variables.baseURL,
});

export default api;
