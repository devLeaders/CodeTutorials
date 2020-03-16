import axios from "axios";
import {AsyncStorage} from 'react-native';

const response = axios.create({
  baseURL: "http://192.168.100.175:3300",
  //timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    //'Authorization': `Bearer ${AsyncStorage.getItem("token")}`
}

});
response.interceptors.request.use((request)=> {
  console.log(request)
  return request;
})


export default response;