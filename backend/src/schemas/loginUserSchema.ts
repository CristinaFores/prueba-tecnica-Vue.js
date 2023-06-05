import { Joi } from "express-validation";
import { RegisterData } from "../types/types";

const loginUserSchema = {
  body: Joi.object<RegisterData>({
    username: Joi.string().required().messages({
      "string.empty": "El nombre de usuario es requerido",
    }),
    password: Joi.string().required().messages({
      "string.empty": "La contraseña es requerida",
    }),
  }),
};

export default loginUserSchema;
