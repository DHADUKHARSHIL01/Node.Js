import { Schema, model } from "mongoose";
const productSchema = Schema({
  name: String,
  price: Number,
  brand: String,
  Quantity: Number,
  category: String,
});

export default model("products", productSchema);
