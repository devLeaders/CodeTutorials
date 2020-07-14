import instance from "../../../config/axios/configAxios";
import { ErrorMessages } from "../enums";
import { postUser } from "./connector";
export const signInSubmit = async (
  value: { email: string; password: string },
  action: any
) => {
  try {
    // const dataResponse = await instance.post("/auth/signin", {
    //   email: `${value.email}`,
    //   password: `${value.password}`,
    // });
    const dataResponse = await postUser({
      email: `${value.email}`,
      password: `${value.password}`,
    });
    const token = dataResponse.data.token;
    localStorage.setItem("token", token);
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } catch (err) {
    action.setErrors({ email: ErrorMessages.ACCOUNT_NOT_FOUND });
  }
};
