import axiosConfig from '../api/AxiosConfig';
import axios from 'axios';

const postUser = async (user: any) => {
  console.log(user);
  return axios.post('http://192.168.0.105:3300/auth/signup', user);
};

export default postUser;
