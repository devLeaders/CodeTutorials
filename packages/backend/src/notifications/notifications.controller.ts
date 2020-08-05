import { NotificationDto } from './notification.dto';
import { Controller, Post, Res, Req, Body } from '@nestjs/common';
import {NotificationsService} from "./notifications.service"
import {Response, Request} from 'express'


@Controller('notifications')
export class NotificationsController {
    constructor(private notificationService: NotificationsService){}

    @Post('/firebase')
    notify(@Res() res: Response, @Req() req: Request){
        return this.notificationService.notify(res, req)
    }
}
