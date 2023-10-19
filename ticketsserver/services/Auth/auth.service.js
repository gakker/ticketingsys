import bcrypt from "bcrypt";
import { User } from "../../models/users.js";
import { createError } from "../../helpers/error.js";

class AuthClass {
  async register(payload) {
    const { name, email, password, role } = payload;

    const checkEmail = await User.findOne({ email: email });

    if (checkEmail) {
      return createError(409, "user with this email already exists");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const saveUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    });

    const user = await saveUser.save();

    return { message: "User Created Successfully", user };
  }
}

export const Auth = new AuthClass();
