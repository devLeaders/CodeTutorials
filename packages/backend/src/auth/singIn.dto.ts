import {ISingInRequest} from '@project/common/features/auth/models'
import {ApiProperty} from '@nestjs/swagger'
import { IsOptional } from 'class-validator';
export class SingInDTO implements  ISingInRequest {

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    @IsOptional()
    notificationToken: string;
}