import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.js";
import { env } from "../../config/env.js";

export const handleError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      ...(env.NODE_ENV === "development" && { stack: err.stack })
    });
  } else {
    console.error("Error:", err);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      ...(env.NODE_ENV === "development" && { stack: err.stack }),
    });
  }
};
