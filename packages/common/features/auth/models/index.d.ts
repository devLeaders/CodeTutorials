export interface IUserRequest {
    email: string;
    password: string;
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
    repeatPassword: string;
}

export interface IChangePasswordRequest {
    token: string;
    password: string;
    repeatPassword: string;
}

export interface ITokenRequest {
    token: string;
    dateExpired: Date;
}