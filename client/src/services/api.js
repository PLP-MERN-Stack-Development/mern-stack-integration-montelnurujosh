import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Auth
export const registerUser = (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/auth/login`, userData);

// Posts
export const getPosts = () => axios.get(`${API_URL}/posts`);
export const createPost = (formData, token) =>
  axios.post(`${API_URL}/posts`, formData, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
  });

// Categories
export const getCategories = () => axios.get(`${API_URL}/categories`);
export const createCategory = (data, token) =>
  axios.post(`${API_URL}/categories`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
