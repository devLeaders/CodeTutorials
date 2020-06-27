import * as yup from "yup";
import { ErrorMessages } from "../enums";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .label("Email")
    .email(ErrorMessages.WRONG_EMAIL)
    .required(ErrorMessages.REQUIRED_EMAIL),
  password: yup
    .string()
    .label("Password")
    .required(ErrorMessages.REQUIRED_PASSWORD)
    .min(8, ErrorMessages.MIN_LENGHT_PASSWORD)
    .max(20, ErrorMessages.MAX_LENGHT_PASSWORD),
});

export const RegValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(ErrorMessages.WRONG_EMAIL)
    .required(ErrorMessages.REQUIRED_EMAIL)
    .max(255),
  password: yup
    .string()
    .required(ErrorMessages.REQUIRED_PASSWORD)
    .min(8, ErrorMessages.MIN_LENGHT_PASSWORD)
    .max(255),
  passwordConfirmation: yup
    .string()
    .required(ErrorMessages.REQUIRED_PASSWORD)
    .min(8, ErrorMessages.MIN_LENGHT_PASSWORD)
    .max(255)
    .oneOf([yup.ref("password")], ErrorMessages.SAME_PASSWORD),
});
