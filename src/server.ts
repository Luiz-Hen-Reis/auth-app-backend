import express from "express";
import { config } from "dotenv";

config();
const app = express();

app.use(express.json());

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});
