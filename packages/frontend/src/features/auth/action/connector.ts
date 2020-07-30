import instance from "../../../config/axios/configAxios";

interface UserInterface {
  email: string;
  password: string;
}
export const postUser = (user: UserInterface, url: string) => {
  const dataResponse = instance.post(url, user);
  return dataResponse;
};
