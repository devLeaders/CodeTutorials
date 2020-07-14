import instance from "../../../config/axios/configAxios";

interface UserInterface {
  email: string;
  password: string;
}
export const postUser = (user: UserInterface) => {
  const dataResponse = instance.post("/auth/signup", user);
  return dataResponse;
};
