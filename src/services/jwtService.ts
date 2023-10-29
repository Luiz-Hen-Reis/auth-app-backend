import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const privateKey = process.env.PRIVATE_KEY as string;

export const jwtService = {
  signToken: (payload: string | object | Buffer, expiration: string) => {
    return jwt.sign(payload, privateKey, {
      expiresIn: expiration,
    });
  },
};
