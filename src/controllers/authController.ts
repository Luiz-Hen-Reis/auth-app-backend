import { Request, Response } from "express";
import { User } from "../models/User";
import { jwtService } from "../services/jwtService";

export const authController = {
  register: async (req: Request, res: Response) => {
    const { firstName, lastName, password, email } = req.body;

    try {
      const isUserAlreadyRegistered = await User.findOne({ where: { email } });

      if (isUserAlreadyRegistered) throw new Error("User already registered.");

      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password,
        role: "user",
      });

      res.status(201).json(newUser);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  },

  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (!user)
        return res.status(404).json({ failed: "User does not exist." });

      const payload = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      };

      const token = jwtService.signToken(payload, "1d");

      res.status(200).json({ authenticated: true, ...payload, token });
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });
    }
  },
};
