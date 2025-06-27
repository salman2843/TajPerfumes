import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: 1000,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: ["men", "women", "unisex"],
      lowercase: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
      required: true,
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

    // 🆕 Optional Extra Details (for product display page)
    itemForm: {
      type: String, // e.g., "Liquid", "Spray"
    },
    itemVolume: {
      type: String, // e.g., "120 Millilitres"
    },
    modelNumber: {
      type: String,
    },
    itemWeight: {
      type: String, // or you could use Number + unit separately
    },
    netQuantity: {
      type: String, // e.g., "1 N", "3 bottles"
    },
    numberOfItems: {
      type: Number,
      default: 1,
    },
    scent: {
      type: String, // e.g., "Wood", "Citrus"
    },
    specialFeature: {
      type: String, // e.g., "Long Lasting"
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
