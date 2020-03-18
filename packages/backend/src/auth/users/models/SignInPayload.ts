export class SignInPayload {

    iat:string;

    constructor(public id:number, public email:string) {}
}