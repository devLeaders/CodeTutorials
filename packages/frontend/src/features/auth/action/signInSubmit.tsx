
import { ErrorMessages } from "../enums";
import * as AuthConnectors from "@project/common/features/auth/connectors"
import AxiosInstance from '@project/common/features/config/axios/configAxios';

export const signInSubmit = async (
  value: { email: string; password: string },
  action: { setErrors: (fields: { [field: string]: string }) => void }
) => {
  try {
    const dataResponse = await AuthConnectors.signIn({
                          email: `${value.email}`,
                          password: `${value.password}`,
                        });
    const token = dataResponse.data.token;
    localStorage.setItem("token", token);
    AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } catch (err) {
    action.setErrors({ email: ErrorMessages.ACCOUNT_NOT_FOUND });
  }
};
