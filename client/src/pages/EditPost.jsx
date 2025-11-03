import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../context/PostContext";
import { fetchPost } from "../services/api";

const EditPost = () => {
  const { id } = useParams();
  const { editPost } = usePosts();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);
        const { data } = await fetchPost(id);
        const post = data.data || data;
        setFormData({
          title: post.title,
          content: post.content,
          excerpt: post.excerpt || "",
        });
      } catch (err) {
        console.error(err);
        setError("Error fetching post data");
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      setError("Title and content are required");
      return;
    }
    try {
      await editPost(id, formData);
      navigate(`/posts/${id}`);
    } catch (err) {
      setError(err.message || "Error updating post");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Title"
        />
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Excerpt (optional)"
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full border p-2 rounded h-40"
          placeholder="Content"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditPost;
