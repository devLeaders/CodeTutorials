import Axios from "../../../config/axios/configAxios";
import { ErrorMessages } from "../enums";

export const signUpSubmit = async (
  value: { email: string; password: string },
  action: any
) => {
  action.setErrors({});
  try {
    const dataResponse = await Axios.post("/auth/signup", {
      email: `${value.email}`,
      password: `${value.password}`,
    });
    const response = dataResponse.data;
  } catch (err) {
    const error = err.response.data;
    if (error.message === ErrorMessages.DUPLICATE_EMAIL) {
      action.setErrors({ email: ErrorMessages.DUPLICATE_EMAIL });
    } else if (error.statusCode === 500) {
      action.setErrors({ email: ErrorMessages.SERVER_CRUSHED });
    }
  }
};
