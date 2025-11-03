import React, { createContext, useContext, useState, useEffect } from "react";
import { getPosts, createPost as createPostAPI } from "../services/api";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch posts once when context mounts
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await getPosts();
      setPosts(res.data.data || []);
    } catch (err) {
      setError(err.message || "Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Create new post
  const createPost = async (formData, token) => {
    try {
      const res = await createPostAPI(formData, token);
      setPosts((prev) => [res.data.data, ...prev]); // Optimistic update
      return res.data.data;
    } catch (err) {
      throw err;
    }
  };

  return (
    <PostContext.Provider value={{ posts, loading, error, fetchPosts, createPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
