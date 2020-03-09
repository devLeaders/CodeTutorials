import * as React from 'react';
import {ToastAndroid, Platform, Alert} from 'react-native';
import postUser from './PostUser';
import handleRegistrationAlert from './handleRegistrationAlert';

enum Systems {
  IOS = 'ios',
}
enum RegistrationInformations {
  POSITIVE = 'Rejestracja przebiegła pomyślnie',
  DUPLICATE_EMAIL = 'Podany email jest już używany',
  SERVER_CRUSHED = 'błąd servera',
}

const handleFormSubmit = async (
  values: {email: string; password: string},
  actions: any,
) => {
  const user = {
    email: values.email,
    password: values.password,
  };
  actions.resetForm();
  try {
    const res = await postUser(user);
    handleRegistrationAlert(Systems.IOS, RegistrationInformations.POSITIVE);
  } catch (err) {
    if (
      err.response.data.message === 'Given email already exists in database'
    ) {
      handleRegistrationAlert(
        Systems.IOS,
        RegistrationInformations.DUPLICATE_EMAIL,
      );
    } else if (err.response.data.statusCode === 500) {
      handleRegistrationAlert(
        Systems.IOS,
        RegistrationInformations.SERVER_CRUSHED,
      );
    }
  }
};

export default handleFormSubmit;
