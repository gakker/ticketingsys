import mongoose from "mongoose";

export const DBconnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/ticketBooking", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Db connection success");
  } catch (error) {
    console.log(error);
  }
};
