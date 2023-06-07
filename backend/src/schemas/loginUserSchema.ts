import { Joi } from "express-validation";
import { RegisterData } from "../types/types";

const loginUserSchema = {
  body: Joi.object<RegisterData>({
    username: Joi.string().required().messages({
      "string.empty": "El nombre de usuario es obligatorio",
    }),
    password: Joi.string().required().messages({
      "string.empty": "La contraseña es obligatoria",
    }),
  }),
};

export default loginUserSchema;
