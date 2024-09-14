import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import { error } from "console";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then((err) => {
    app.listen(process.env.PORT || 6001, () => {
      console.log(`Server is running at: ${process.env.PORT}`);
      console.log("Hello");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
  });
