import mongoose from "mongoose";

const ticketSchema = mongoose.Schema(
  {
    ticketNo: {
      type: String,
    },
    title: {
      type: String,
      requried: true,
    },
    description: {
      type: String,
      requried: true,
    },
    priority: {
      type: String,
      enum: ["High", "Low", "Normal", "Critical"],
      default: "Normal",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    dueDate: {
      type: Date,
      default: Date.now(),
    },
    comments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comments",
    },
    status: {
      type: String,
      enum: ["On Hold", "Resolved", "Closed", "Cancelled"],
      default: "On Hold",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export const Tickets = new mongoose.model("tickets", ticketSchema);
