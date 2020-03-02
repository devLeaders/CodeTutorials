import * as React from 'react';
import {ToastAndroid} from 'react-native';
import postUser from '../api/PostUser';

const handleFormSubmit = async (values: any, actions: any) => {
  const user = {
    email: values.email,
    password: values.password,
  };
  actions.resetForm();
  try {
    const res = await postUser(user);
    console.log(res);
    ToastAndroid.showWithGravity(
      'Rejestracja pomyśla',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  } catch (err) {
    console.log(err.response.data.statusCode);
    if (err.response.data.statusCode === 409) {
      ToastAndroid.showWithGravity(
        'Podany email jest już używany',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  }
};

export default handleFormSubmit;
