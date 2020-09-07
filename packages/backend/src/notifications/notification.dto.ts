import {ApiProperty} from '@nestjs/swagger'

export class NotificationDto {

    @ApiProperty()
    message: {
        notification:{
            title: string,
            body:string
        }
    };
    @ApiProperty()
    registrationToken: string;
}