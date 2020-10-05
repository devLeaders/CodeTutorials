import {ApiProperty} from "@nestjs/swagger";
import {IChangePasswordRequest} from "@project/common/features/auth/models";
import {MinLength} from "class-validator";
import {PASSWORD_LENGTH} from "@project/common/features/Const"
export class ChangePasswordDTO implements IChangePasswordRequest {

	@ApiProperty()
	token: string;

	@ApiProperty()
	@MinLength(PASSWORD_LENGTH)
	password: string;
}