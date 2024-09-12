import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

connectDB()
  .catch((err) => {
    console.log("mongo db connection failled", err);
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server is runing at : ${process.env.PORT}`);
      console.log("hello");
    });
  });
