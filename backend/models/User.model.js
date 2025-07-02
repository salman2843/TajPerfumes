import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 50,
    },
    username: {
      required: [true, "Username is required"],
      type: String,
      trim: true,
      lowercase: true,
      minLength: 3,
      maxLength: 20,
      unique: true,
      sparse: true, // important to allow null/undefined for social users
      match: /^[a-zA-Z0-9_]+$/,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password: {
      required: [true, "Password is required"],
      type: String,
      minLength: 6,
      select: false, // hide password by default
    },

    // Social Login Specific Fields
    provider: {
      type: String,
      enum: ["google", "facebook", "apple", "local"],
      default: "local",
    },
    providerId: {
      type: String,
      unique: true,
      sparse: true, // sparse so we can allow null for local users
    },

    // Optional extra fields
    avatar: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
