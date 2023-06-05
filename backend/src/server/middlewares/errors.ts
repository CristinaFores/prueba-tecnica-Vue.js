import "../../loadEnviroment.js";
import type { NextFunction, Request, Response } from "express";
import CustomError from "../../CustomError/CustomError.js";
import { ValidationError } from "express-validation";

export const unknownEndpoint = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { path } = req;

  next(new CustomError(`Unknown Endpoint: ${path}`, 404, "Unknown endpoint"));
};

export const generalError = (
  error: CustomError | ValidationError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ValidationError) {
    return res.status(400).json(error);
  }

  const statusCode = error.statusCode ?? 500;
  const publicMessage = error.publicMessage || "There is a error general";

  res.status(statusCode).json({ error: publicMessage });
};
