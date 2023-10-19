import { Auth } from "../../services/Auth/auth.service.js";

export const register = async (req, res, next) => {
  try {
    const payload = req.body;
    const user = await Auth.register(payload);
    res.json(user);
  } catch (error) {
    next(error);
  }
};
