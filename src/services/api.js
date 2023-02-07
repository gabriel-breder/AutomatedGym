import axios from 'axios';

const api = axios.create({
  baseURL: 'https://automated-gym-production.up.railway.app/api',
});

export default api;
