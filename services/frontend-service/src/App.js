import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (credentials) => api.post('/api/users/login', credentials),
  register: (userData) => api.post('/api/users/register', userData),
};

export const taskAPI = {
  getTasks: () => api.get('/api/tasks'),
  createTask: (task) => api.post('/api/tasks', task),
  updateTask: (id, task) => api.put(`/api/tasks/${id}`, task),
  deleteTask: (id) => api.delete(`/api/tasks/${id}`),
};

export default api;