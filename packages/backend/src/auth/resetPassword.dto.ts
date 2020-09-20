import {IResetPasswordRequest} from '@project/common/features/auth/models'
import {ApiProperty} from '@nestjs/swagger'
export class ResetPasswordDTO implements IResetPasswordRequest {

    @ApiProperty()
    email: string;

}