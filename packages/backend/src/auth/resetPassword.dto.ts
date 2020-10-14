import {ApiProperty} from "@nestjs/swagger";
import {IResetPasswordRequest} from "@project/common/features/auth/models";

export class ResetPasswordDTO implements IResetPasswordRequest {

	@ApiProperty()
	email: string;

}