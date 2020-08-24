export interface IUserRequest {
  email: string;
  password: string;
}

export interface ISingInRequest {
  email: string;
  password: string;
  notificationToken: string | null;
}

export interface ISingInResponse {
  token: string;
}
