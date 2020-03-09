import axios from 'axios';

enum Ips {
  MYIP = 'http://192.168.0.105:3300',
}

const response = axios.create({
  baseURL: Ips.MYIP,
});

export default response;
