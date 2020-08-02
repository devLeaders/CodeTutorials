import * as yup from "yup";
import { ErrorMessages, Fields } from "../enums";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .label(Fields.EMAIL)
    .email(ErrorMessages.WRONG_EMAIL)
    .required(ErrorMessages.REQUIRED_EMAIL)
    .max(255),
  password: yup
    .string()
    .label(Fields.PASSWORD)
    .min(8, ErrorMessages.MIN_LENGHT_PASSWORD)
    .max(255)
    .required(ErrorMessages.REQUIRED_PASSWORD),
  passwordConfirmation: yup
    .string()
    .label(Fields.PASSWORD_CONFIRMATION)
    .min(8, ErrorMessages.MIN_LENGHT_PASSWORD)
    .max(255)
    .oneOf([yup.ref(Fields.PASSWORD)], ErrorMessages.SAME_PASSWORD)
    .required(ErrorMessages.REQUIRED_PASSWORD),
});
