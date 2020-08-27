import { History } from "history";
import { ErrorMessages } from "../enums";
import * as AuthConnectors from "@project/common/features/auth/connectors";
import AxiosInstance from "@project/common/features/config/axios/configAxios";
import { Navigation } from "../../../config/routing/NavigationPath";

export const signInSubmit = async (
  value: { email: string; password: string },
  action: { setErrors: (fields: { [field: string]: string }) => void },
  history: History
) => {
  try {
    const notificationToken = localStorage.getItem("notification-token");
    const dataResponse = await AuthConnectors.signIn({
      email: `${value.email}`,
      password: `${value.password}`,
      notificationToken: notificationToken,
    });
    const token = dataResponse.data.token;
    AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
    history.push(Navigation.HOME);
  } catch (err) {
    action.setErrors({ email: ErrorMessages.ACCOUNT_NOT_FOUND });
  }
};
