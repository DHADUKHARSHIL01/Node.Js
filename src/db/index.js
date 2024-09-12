import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectonInstance = await mongoose.connect(
      `${process.env.MOGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n mongodb connected !! DB HOST: ${connectonInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb connection error", error);
    process.exit(1);
  }
};

export default connectDB;
