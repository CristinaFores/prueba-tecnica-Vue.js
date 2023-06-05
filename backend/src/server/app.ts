import "./loadEnviroment.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { loginUser } from "./usersControllers/usersControllers.js";

const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", loginUser);

export default app;
