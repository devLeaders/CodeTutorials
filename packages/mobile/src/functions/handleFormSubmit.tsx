import * as React from 'react';
import {Alert} from 'react-native';
import postUser from '../api/PostUser';

const handleFormSubmit = (values: any, actions: any) => {
  const user = {
    email: values.email,
    password: values.password,
  };
  postUser(user);
  actions.resetForm();
  //   Alert.alert(user);
};

export default handleFormSubmit;
