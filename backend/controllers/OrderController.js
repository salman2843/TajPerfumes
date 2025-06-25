import Order from "../models/Order.model.js";

// @desc    Create new order
// @route   POST /api/orders
export const createOrder = async (req, res) => {
  try {
    const { orderItems, shippingAddress, paymentMethod, totalAmount } =
      req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    const newOrder = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      totalAmount,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to place order", error: err.message });
  }
};

// @desc    Get current user's orders
// @route   GET /api/orders/my
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.status(200).json(orders);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to get orders", error: err.message });
  }
};

// @desc    Get single order by ID
// @route   GET /api/orders/:id
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(order);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching order", error: err.message });
  }
};

// @desc    Mark order as delivered
// @route   PUT /api/orders/:id/deliver
export const markOrderDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.isDelivered = true;
    order.deliveredAt = Date.now();
    await order.save();

    res.status(200).json({ message: "Order marked as delivered" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update order", error: err.message });
  }
};
