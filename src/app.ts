import express from "express";
import cors from "cors";
import helmet from "helmet";
import { handleError } from "./shared/middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.use(handleError);

export default app;
