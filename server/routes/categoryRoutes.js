
import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// Simple Category schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});
const Category = mongoose.model("Category", categorySchema);

// GET all categories
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json({ success: true, data: categories });
});

// POST create category
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.status(201).json({ success: true, data: category });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
