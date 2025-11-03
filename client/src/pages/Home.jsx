import React from "react";
import { usePosts } from "../context/PostContext";

const Home = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return <p className="text-center">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post._id} className="border p-3 rounded">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              {post.featuredImage && (
                <img
                  src={`http://localhost:5000/uploads/${post.featuredImage}`}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded my-2"
                />
              )}
              <p>{post.excerpt || post.content.substring(0, 100)}...</p>
              <small className="text-gray-500">
                Author: {post.author?.name || "Unknown"} | Category:{" "}
                {post.category?.name || "Uncategorized"}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
