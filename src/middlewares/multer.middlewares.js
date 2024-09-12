import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/tmp");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const uplode = multer({ storage: storage });
