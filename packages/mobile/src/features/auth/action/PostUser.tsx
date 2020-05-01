import axiosConfig from '../../../config/axios/AxiosConfig';
import axios from 'axios';

const postUser = async (user: {email: string; password: string}) => {
  return axiosConfig.post('/auth/signup', user);
};

export default postUser;
