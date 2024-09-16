import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import { app } from "./app.js";
import http from "http";

dotenv.config({
  path: "./.env",
});

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "'text/html" });
    res.write("hello");
    res.end();
  })
  .listen(process.env.PORT);

connectDB()
  .then(() => {
    console.log(`Server is running at: ${process.env.PORT}`);
    console.log("Hello");
  })

  .catch((error) => {
    console.error("MongoDB connection failed", error);
  });
// connectDB()
//   .then((err) => {
//     app.listen(process.env.PORT || 6001, () => {
//       console.log(`Server is running at: ${process.env.PORT}`);
//       console.log("Hello");
//     });
//   })
//   .catch((err) => {
//     console.error("MongoDB connection failed", err);
//   });
