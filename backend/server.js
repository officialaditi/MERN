import express, { Router } from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

// product route

app.use("/api/products", productRoutes);


// error handler middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.bgBlue
  );
});
