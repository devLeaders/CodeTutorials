import { NotificationDto } from './notification.dto';
import { Controller, Post, Res, Req, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Response, Request } from 'express';

@Controller('notifications')
export class NotificationsController {
  constructor(private notificationService: NotificationsService) {}

  @Post('/firebase')
  notifyFirebase(@Body() notificationDto: NotificationDto) {
    return this.notificationService.notifyFirebase(notificationDto);
  }

  @Post('/Hms')
  notifyHms(@Body() notificationDto: NotificationDto){
    return this.notificationService.notifyHms(notificationDto);
  }
  
}
