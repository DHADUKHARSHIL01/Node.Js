import { Schema, model } from "mongoose";

const loginSchema = Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
});
