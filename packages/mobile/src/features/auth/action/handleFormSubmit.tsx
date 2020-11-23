import * as React from 'react';

import postUser from './PostUser';
import handleRegistrationAlert from './handleRegistrationAlert';
import { user } from '../../common/types/types';

enum Systems {
  IOS = 'ios',
}
enum RegistrationInformations {
  POSITIVE = 'Rejestracja przebiegła pomyślnie',
  DUPLICATE_EMAIL = 'Podany email jest już używany',
  SERVER_CRUSHED = 'błąd servera',
}
enum ErrorMessages {
  DUPLICATE_EMAIL = 'Given email already exists in database',
}


const handleFormSubmit = async (
  values: user,
  actions: any,
) => {
  const user = {
    email: values.email,
    password: values.password,
    name: values.name
  };
  actions.resetForm();
  try {
    const res = await postUser(user);
    handleRegistrationAlert(Systems.IOS, RegistrationInformations.POSITIVE);
  } catch (err) {
    const error = err.response.data;
    if (error.message === ErrorMessages.DUPLICATE_EMAIL) {
      handleRegistrationAlert(Systems.IOS, RegistrationInformations.DUPLICATE_EMAIL);
    } else if (error.statusCode === 500) {
      handleRegistrationAlert(Systems.IOS, RegistrationInformations.SERVER_CRUSHED);
    }
  }
};

export default handleFormSubmit;
