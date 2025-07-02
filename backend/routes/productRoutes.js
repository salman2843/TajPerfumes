import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { uploadProductImage } from "../controllers/ProductController.js";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Protected (admin-only) routes
router.post("/", protect, adminOnly, createProduct);
router.put("/:id", protect, adminOnly, updateProduct);
router.delete("/:id", protect, adminOnly, deleteProduct);

// this route is for uploading product images
router.post("/upload", upload.single("image"), uploadProductImage);

export default router;
