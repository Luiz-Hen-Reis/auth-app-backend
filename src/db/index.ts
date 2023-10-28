import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL as string;

export const sequelize = new Sequelize(DB_CONNECTION_URL);
