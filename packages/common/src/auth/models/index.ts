export interface IUserRequest {
  email: string;
  password: string;
}

export interface ISignInRequest {
  email: string;
  password: string;
  firebaseToken: string | null;
}

export interface ISignInResponse {
  token: string;
}

export interface ISignInGoogleRequest {
  idToken?: string;
}
