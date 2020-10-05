import {IToken} from "@project/common/features/auth/models";
export class Token implements IToken {
	token: string;
	dateExpired: Date;
}