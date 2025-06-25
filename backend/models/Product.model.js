import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    maxLength: 1000
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ["men", "women", "unisex"], // feel free to expand
    lowercase: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  imageUrl: {
    type: String,
    required: true // assuming you're uploading to Cloudinary or similar
  },
  ratings: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  numReviews: {
    type: Number,
    default: 0
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product;

