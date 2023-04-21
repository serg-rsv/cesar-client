import axios from 'axios';

// const BASE_URL = 'http://localhost:5000/api';
const BASE_URL = 'https://cesar-ws.onrender.com/api';

export const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }
  return config;
});
