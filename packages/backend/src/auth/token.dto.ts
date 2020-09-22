import {ApiProperty} from "@nestjs/swagger";
import {ITokenRequest} from "@project/common/features/auth/models";
import {IsDate} from "class-validator";

export class TokenDTO implements ITokenRequest {

	@ApiProperty()
	token: string;

	@ApiProperty()
	@IsDate()
	dateExpired: Date;
}