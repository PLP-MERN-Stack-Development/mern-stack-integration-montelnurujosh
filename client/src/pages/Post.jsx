import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchPost } from "../services/api";
import { usePosts } from "../context/PostContext";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { removePost } = usePosts();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        setLoading(true);
        const { data } = await fetchPost(id);
        setPost(data.data || data);
      } catch (err) {
        console.error(err);
        setError("Post not found");
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await removePost(id);
      navigate("/");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading post...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">{post.content}</p>
      <small className="text-gray-500">
        Author: {post.author || "Unknown"} | Category: {post.category || "Uncategorized"}
      </small>

      <div className="mt-4 space-x-2">
        <Link
          to={`/edit/${post._id}`}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
