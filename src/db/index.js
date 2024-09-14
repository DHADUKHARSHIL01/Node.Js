import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MOGODB_URL}/${DB_NAME}` // Corrected the template literal syntax
    );
    console.log(
      `\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}` // Corrected the template literal syntax
    );
  } catch (error) {
    console.log("MongoDB connection error", error); // Changed to console.error for error logging
    process.exit(1);
  }
};

export default connectDB;
