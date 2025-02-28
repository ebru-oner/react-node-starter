import express from "express";
import { PORT, SERVER_URL } from "./config";

const server = express();

server.listen(PORT, () => {
  console.info(`Server is listening on ${SERVER_URL}`);
});
