import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    shopName: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    products: [],
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
