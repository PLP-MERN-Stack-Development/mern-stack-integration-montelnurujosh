import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <article className="card">
      <Link to={`/posts/${post._id}`}>
        <h3>{post.title}</h3>
        <p>{post.excerpt || post.content.slice(0,120)}</p>
      </Link>
      <small>{new Date(post.createdAt).toLocaleString()}</small>
    </article>
  );
}
