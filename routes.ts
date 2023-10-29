import express from "express";
import { authController } from "./src/controllers/authController";

const router = express.Router();

router.post("/auth/register", authController.register);

export { router };
