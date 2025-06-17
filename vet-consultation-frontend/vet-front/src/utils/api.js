import axios from 'axios';

const BASE_URL = "http://localhost:8080/api"; // Change to your actual backend base URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
