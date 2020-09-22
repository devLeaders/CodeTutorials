import {IJWTTokenRequest} from '@project/common/features/auth/models';
import {ApiProperty} from '@nestjs/swagger';
export class JWTTokenDTO implements IJWTTokenRequest {

	@ApiProperty()
    id: string;

	@ApiProperty()
    email: string;

    @ApiProperty()
    iat:number;

	@ApiProperty()
    exp:number;
}