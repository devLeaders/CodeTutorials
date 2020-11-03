export interface IUserRequest {
  email: string;
  password: string;
  name: string
}
export interface IUserDataRespons {
  email: string;
  name: string;
}

export interface ISingInRequest {
  email: string;
  password: string;
  firebaseToken: string | null;
}

export interface ISingInResponse {
  token: string;
}


export interface IResetPasswordRequest {
  email: string;
}

export interface IChangePasswordRequest {
  token: string;
  password: string;
}

export interface IToken {
  token: string;
  dateExpired: Date;
}

export interface IJWTToken {
  id: string;
  email: string;
  iat:number;
  exp:number;
}
