import mongoose from "mongoose";

const commentsSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      default: newUUID,
    },
    author: {
      type: Smongoose.Schema.Types.ObjectId,
      ref: "users",
    },

    text: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Comments = new mongoose.model("comments", commentsSchema);
