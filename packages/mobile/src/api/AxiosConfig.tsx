import axios from "axios";
import {AsyncStorage} from 'react-native';

const response = axios.create({
  baseURL: "http://192.168.100.173:3300",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});


response.interceptors.request.use((request)=> {
  console.log(request)
  return request;
})


export default response;
