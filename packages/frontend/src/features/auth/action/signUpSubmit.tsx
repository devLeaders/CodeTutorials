import { ErrorMessages } from "../enums";
import * as AuthConnectors from "@project/common/features/auth/connectors";
import { Navigation } from "../../../config/routing/NavigationPath";
import { ServerStatus } from "../../../config/axios/models";

export const signUpSubmit = async (
  value: { email: string; password: string, name:string },
  action: { setErrors: (fields: { [field: string]: string }) => void }
) => {
  try {
    await AuthConnectors.signUp({
      email: `${value.email}`,
      password: `${value.password}`,
      name: `${value.name}`
    });
    window.location.replace(Navigation.LOGIN);
  } catch (err) {
    const error = err.response.data;
    if (error.statusCode === ServerStatus.CONFLICT) {
      action.setErrors({ email: ErrorMessages.DUPLICATE_EMAIL });
    } else if (error.statusCode === ServerStatus.SERVER_ERROR) {
      action.setErrors({ email: ErrorMessages.SERVER_CRUSHED });
    }
  }
};
