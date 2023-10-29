import { Request, Response } from "express";
import { User } from "../models/User";

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
    return res.json({ status: " ok " });
  },
};
