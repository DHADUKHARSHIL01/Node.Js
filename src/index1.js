// import http from "http";
// import data from "./api.data.js";

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "content-Type": "applicationjson" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(6001);

import express from "express";
import Products from "./product.js";
import mongoose from "mongoose";
import product from "./product.js";
const app = express();

app.use(express.json());

const mongoURI = "mongodb://localhost:27017/mydb";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.post("/create", async (req, res) => {
  const productData = new Products(req.body);
  const result = await productData.save();
  res.status(201).send(result);
});

app.get("/list", async (req, res) => {
  let data = await Products.find();
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Products.deleteOne(req.params);
  res.send(data);
});
app.listen(5001, () => {
  console.log(`Server is running on port 5001`);
});
