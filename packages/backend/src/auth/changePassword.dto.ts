import {ApiProperty} from "@nestjs/swagger";
import {IChangePasswordRequest} from "@project/common/features/auth/models";
import {MinLength} from "class-validator";

export class ChangePasswordDTO implements IChangePasswordRequest {

	@ApiProperty()
	token: string;

	@ApiProperty()
	@MinLength(8)
	password: string;

	@ApiProperty()
	@MinLength(8)
	repeatPassword: string;
}