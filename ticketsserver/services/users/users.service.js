import mongoose from "mongoose";
import { User } from "../../models/users";

class usersClass {
  async getAllUsers() {
    const users = await User.find();

    if (!users) {
      return { status: false, data: null, message: "users not found" };
    }

    return { status: true, data: users, message: "Successfully fetched users" };
  }

  async getSingleUser(id) {
    const user = await User.findById(id);

    if (!user) {
      return { status: false, data: null, message: "users not found" };
    }

    return { status: true, data: user, message: "Successfully fetch user" };
  }

  async updateUser(id, payload) {
    const user = await User.findById(id);

    if (!user) {
      return { status: false, data: null, message: "users not found" };
    }
    const updateUser = await User.findByIdAndUpdate(
      id,
      { payload },
      { new: true }
    );

    if (!updateUser) {
      return { status: false, data: null, message: "Failed to update User" };
    }
    return { status: true, data: user, message: "Successfully fetch user" };
  }

  async getSingleUser(id) {
    const user = await User.findById(id);

    if (!user) {
      return { status: false, data: null, message: "users not found" };
    }

    return { status: true, data: user, message: "Successfully fetch user" };
  }
}


export const Users = new usersClass()