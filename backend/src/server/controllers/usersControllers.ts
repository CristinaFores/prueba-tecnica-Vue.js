import type { NextFunction, Request, Response } from "express";
import environment from "../loadEnviroment.js";
import CustomError from "../../CustomError/CustomError.js";
import { Credentials } from "../../types/types.js";
import User from "../../dataBase/models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body as Credentials;
  const user = await User.findOne({ username });

  if (!user) {
    next(new CustomError("Username not found", 401, "Wrong credentials"));
    return;
  }

  if (!(await bcrypt.compare(password, user.password))) {
    next(new CustomError("Password is incorrect", 401, "Wrong credentials"));
    return;
  }

  const tokenPayload = {
    id: user._id,
    username: user.username,
  };

  const token = jwt.sign(tokenPayload, environment.jwtSecret, {
    expiresIn: "1d",
  });

  res.status(200).json({ token });
};
