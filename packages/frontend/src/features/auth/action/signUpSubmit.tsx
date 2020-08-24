import { History } from "history";
import { ErrorMessages } from "../enums";
import * as AuthConnectors from "@project/common/features/auth/connectors";
import { Navigation } from "../../../config/routing/NavigationPath";

export const signUpSubmit = async (
  value: { email: string; password: string },
  action: { setErrors: (fields: { [field: string]: string }) => void },
  history: History
) => {
  try {
    await AuthConnectors.signUp({
      email: `${value.email}`,
      password: `${value.password}`,
    });
    history.push(Navigation.LOGIN);
  } catch (err) {
    const error = err.response.data;
    if (error.statusCode === 409) {
      action.setErrors({ email: ErrorMessages.DUPLICATE_EMAIL });
    } else if (error.statusCode === 500) {
      action.setErrors({ email: ErrorMessages.SERVER_CRUSHED });
    }
  }
};
