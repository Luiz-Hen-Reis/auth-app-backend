import express from "express";
import { config } from "dotenv";
import { sequelize } from "./db";

config();
const app = express();

app.use(express.json());

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => {
  try {
    sequelize.authenticate().then(() => {
      console.log(
        `Connection Successful! Server is running on port ${SERVER_PORT}`
      );
    });
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
});
