import React, { useState } from "react";
import { usePosts } from "../context/PostContext";

const CreatePost = () => {
  const { createPost } = usePosts();
  const [form, setForm] = useState({ title: "", content: "", category: "" });
  const [featuredImage, setFeaturedImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const token = localStorage.getItem("token");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleImage = (e) => setFeaturedImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("content", form.content);
      formData.append("category", form.category);
      if (featuredImage) formData.append("featuredImage", featuredImage);

      await createPost(formData, token);
      setSuccess("Post created successfully!");
      setForm({ title: "", content: "", category: "" });
      setFeaturedImage(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create post");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Post</h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3 max-w-md">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category ID"
          value={form.category}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input type="file" onChange={handleImage} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
