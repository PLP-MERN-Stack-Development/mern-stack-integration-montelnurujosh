import React from "react";
import { useForm } from "react-hook-form";
import { usePosts } from "../context/PostContext";

const PostForm = () => {
  const { addPost } = usePosts();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await addPost(data);
    reset();
    alert("✅ Post created successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="post-form">
      <input {...register("title", { required: true })} placeholder="Post title" />
      <textarea {...register("content", { required: true })} placeholder="Post content" />
      <input {...register("author", { required: true })} placeholder="Author ID" />
      <input {...register("category", { required: true })} placeholder="Category ID" />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
