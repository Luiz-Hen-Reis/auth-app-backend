import { Request, Response } from "express";

export const authController = {
  register: async (req: Request, res: Response) => {
    return res.json({ status: " ok " });
  },
};
