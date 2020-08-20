import { ErrorMessages } from "../enums";
import * as AuthConnectors from "@project/common/features/auth/connectors";
import AxiosInstance from "@project/common/features/config/axios/configAxios";
import { Navigation } from "../../../config/routing/NavigationPath";
export const signInSubmit = async (
  value: { email: string; password: string },
  action: { setErrors: (fields: { [field: string]: string }) => void },
  history: any
) => {
  try {
    // await localStorage.setItem("token", "123");

    await history.push(Navigation.MOVIELIST);
    const dataResponse = await AuthConnectors.signIn({
      email: `${value.email}`,
      password: `${value.password}`,
    });
    const token = dataResponse.data.token;
    localStorage.setItem("token", token);
    AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await history.push(Navigation.HOME);
  } catch (err) {
    action.setErrors({ email: ErrorMessages.ACCOUNT_NOT_FOUND });
  }
};
