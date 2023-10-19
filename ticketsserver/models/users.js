import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["user", "admin"], // You can define roles as needed
      default: "user",
    },
  },
  { timestamps: true }
);

export const User = new mongoose.model("users", UserSchema);
