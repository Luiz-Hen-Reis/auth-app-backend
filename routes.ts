import express from "express";
import { authController } from "./src/controllers/authController";

const router = express.Router();

router.get("/auth/register", authController.register);

export { router };
