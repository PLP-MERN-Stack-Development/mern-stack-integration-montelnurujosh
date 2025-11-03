import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import jwt from "jsonwebtoken";
import { fileURLToPath } from "url";
import { dirname } from "path";

import Post from "../models/Post.js";
import User from "../models/User.js";

const router = express.Router();

// ================= Multer Setup =================
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// ================= Auth Middleware =================
const protect = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Not authorized" });

  if (token.startsWith("Bearer ")) token = token.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// ================= Routes =================

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("author category");
    res.json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET single post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author category");
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ success: true, data: post });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// CREATE post (protected + image)
router.post("/", protect, upload.single("featuredImage"), async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const post = await Post.create({
      title,
      content,
      category,
      author: req.user._id,
      featuredImage: req.file ? req.file.filename : "default-post.jpg",
    });
    res.status(201).json({ success: true, data: post });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// UPDATE post (protected)
router.put("/:id", protect, upload.single("featuredImage"), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    if (post.author.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Not allowed" });

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    post.category = req.body.category || post.category;
    if (req.file) post.featuredImage = req.file.filename;

    await post.save();
    res.json({ success: true, data: post });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE post (protected)
router.delete("/:id", protect, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    if (post.author.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Not allowed" });

    await post.remove();
    res.json({ success: true, message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
