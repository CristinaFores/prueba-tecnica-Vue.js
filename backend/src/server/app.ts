import "./loadEnviroment.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { loginUser } from "./controllers/usersControllers.js";
import { generalError, unknownEndpoint } from "./middlewares/errors.js";
import loginUserSchema from "../schemas/loginUserSchema.js";
import { validate } from "express-validation";

const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(
  "/login",
  validate(loginUserSchema, {}, { abortEarly: false }),
  loginUser
);

app.use(unknownEndpoint);
app.use(generalError);

export default app;
