import express from "express";
import multer from "multer";

const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: () => {},
  }),
});

app.post("/upload", (req, res) => {
  res.send("File Upload");
});

app.listen(5001);
