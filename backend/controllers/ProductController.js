import Product from "../models/Product.model.js";

// @desc    Get all products
// @route   GET /api/products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch products", error: err.message });
  }
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching product", error: err.message });
  }
};

// @desc    Create a new product
// @route   POST /api/products
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to create product", error: err.message });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(updated);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to update product", error: err.message });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to delete product", error: err.message });
  }
};
