import instance from "../../../config/axios/configAxios";
import { ErrorMessages } from "../enums";
import { postUser } from "./connector";
export const signUpSubmit = async (
  value: { email: string; password: string },
  action: any
) => {
  try {
    // const dataResponse = await instance.post("/auth/signup", {
    //   email: `${value.email}`,
    //   password: `${value.password}`,
    // });
    const dataResponse = await postUser({
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
