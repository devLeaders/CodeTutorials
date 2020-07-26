import {ISingInRequest} from '@project/common/features/auth/models'
import {ApiProperty} from '@nestjs/swagger'
export class SingInDTO implements  ISingInRequest {

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}