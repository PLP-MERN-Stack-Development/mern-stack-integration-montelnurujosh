// src/services/postService.js
import API from "./api";

const PostService = {
  getAll: () => API.get("/posts"),
  getById: (id) => API.get(`/posts/${id}`),
  create: (data) => API.post("/posts", data),
  update: (id, data) => API.put(`/posts/${id}`, data),
  delete: (id) => API.delete(`/posts/${id}`),
};

export default PostService;
