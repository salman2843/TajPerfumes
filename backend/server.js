import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

// Importing routes using ES Modules
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors()); // re-enable CORS
app.use(express.json());

app.get("/", (req, res) => {
  res.send("💨 API is running... On Backend");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
