import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxLength: 100,
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      maxLength: 1000,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price can't be negative"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["men", "women", "unisex"],
      lowercase: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
      min: [0, "Quantity can't be negative"],
    },
    imageUrl: {
      type: String,
      required: [true, "Image URL is required"],
    },
    ratings: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 🧼 Optional Extras (nice-to-have for perfume display)
    itemForm: String, // e.g., "Liquid", "Spray"
    itemVolume: String, // e.g., "120 ml"
    modelNumber: String, // SKU or internal code
    itemWeight: String, // e.g., "400g"
    netQuantity: String, // e.g., "1N", "3 bottles"
    numberOfItems: {
      type: Number,
      default: 1,
    },
    scent: String, // e.g., "Woody", "Fresh", etc.
    specialFeature: String, // e.g., "Long Lasting", "Premium"

    // 🆕 Extra Marketing & SEO fields (optional but useful)
    keywords: [String], // e.g., ["perfume", "long lasting", "citrus"]
    tags: [String], // for filtering/sorting
    stockStatus: {
      type: String,
      enum: ["in stock", "out of stock", "coming soon"],
      default: "in stock",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        if (ret.createdAt) {
          ret.createdAt = new Date(ret.createdAt)
            .toLocaleString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })
            .replace(",", " -");
        }
        if (ret.updatedAt) {
          ret.updatedAt = new Date(ret.updatedAt)
            .toLocaleString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })
            .replace(",", " -");
        }
        return ret;
      },
    },
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
