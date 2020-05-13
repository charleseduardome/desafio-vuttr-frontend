import axios from 'axios';

const token = localStorage.getItem('@vuttr:token');

const api = axios.create({
  baseURL: 'https://appvuttr.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  },
});

export default api;
