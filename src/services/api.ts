import axios from 'axios';

const api = axios.create({
  baseURL: 'https://appvuttr.herokuapp.com',
});

export default api;
