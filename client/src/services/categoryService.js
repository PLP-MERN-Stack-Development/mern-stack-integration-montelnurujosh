// src/services/categoryService.js
import API from "./api";

const CategoryService = {
  getAll: () => API.get("/categories"),
  create: (data) => API.post("/categories", data),
  update: (id, data) => API.put(`/categories/${id}`, data),
  delete: (id) => API.delete(`/categories/${id}`),
};

export default CategoryService;
