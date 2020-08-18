import AxiosInstance from "../../config/axios/configAxios";
import { AxiosPromise } from "axios";
interface TokenPost {
  registrationToken: string;
  userVisibleOnly: boolean;
}
export const postRegistrationToken = (obj: TokenPost): AxiosPromise<any> => {
  const param = JSON.stringify(obj);
  return AxiosInstance.post(`/notifications/firebase${param}`);
};
