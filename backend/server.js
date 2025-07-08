import express, { Router } from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from 'colors'

dotenv.config();

connectDB();

const app = express();



app.get("/", (req, res) => {
  res.send("api running successfullly...");
});




// route to get all product
app.get("/api/products", (req, res) => {
  res.json(products);
});

// route to get single product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((prod) => prod._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`.bgBlue);
});
