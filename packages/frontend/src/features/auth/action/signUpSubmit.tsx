import { ErrorMessages } from "../enums";
import * as AuthConnectors from '@project/common/features/auth/connectors'

export const signUpSubmit = async (
  value: { email: string; password: string },
  action: { setErrors: (fields: { [field: string]: string }) => void }
) => {
  try {
    const dataResponse = await AuthConnectors.signUp({
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
