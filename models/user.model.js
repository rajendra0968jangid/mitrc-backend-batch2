import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    clerkId: { type: String },
    role: { type: String, required: true, default: "user" },
    isVerified: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("User",userSchema);

