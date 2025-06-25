import express from "express";
import {
  createOrder,
  getUserOrders,
  getOrderById,
  markOrderDelivered,
} from "../controllers/OrderController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes for logged-in users
router.post("/", protect, createOrder);
router.get("/my", protect, getUserOrders);
router.get("/:id", protect, getOrderById);

// Admin route
router.put("/:id/deliver", protect, adminOnly, markOrderDelivered);

export default router;
