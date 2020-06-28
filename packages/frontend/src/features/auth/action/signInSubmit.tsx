import Axios from "../../../config/axios/configAxios";
import { ErrorMessages } from "../enums";

export const signInSubmit = async (
  value: { email: string; password: string },
  action: any
) => {
  action.setErrors({});
  try {
    const dataResponse = await Axios.post("/auth/signin", {
      email: `${value.email}`,
      password: `${value.password}`,
    });

    const token = dataResponse.data.token;
    localStorage.setItem("token", token);
    Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } catch (err) {
    action.setError({ email: ErrorMessages.ACCOUNT_NOT_FOUND });
  }
};
