// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333", // ajuste para a sua API real
});

// Interceptor de requisições: adiciona o token JWT ao header Authorization, se existir
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;