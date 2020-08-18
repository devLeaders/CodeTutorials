import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import admin from 'firebase-admin';

import { NotificationDto } from './notification.dto';
import { NotificationTokenEntity } from './notificationToken.entity';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(NotificationTokenEntity)
    private NotificationTokenRepository: Repository<NotificationTokenEntity>,
  ) {}

  async notifyFirebase(notificationDto) {
    const notification_config = {
      priority: 'high',
      timeToLive: 60 * 60 * 24,
    };

    const NotificationToken = notificationDto.NotificationToken;
    const message = notificationDto.message;

    try {
      const res = await admin
        .messaging()
        .sendToDevice(NotificationToken, message, notification_config);
      console.log(res);
      return {
        res,
      };
    } catch (err) {
      console.log(err);
    }
  }

  async notifyHms(NotificationDto) {}

  async saveNotificationToken(id: string) {
    const NotificationToken = new NotificationTokenEntity();
    NotificationToken.id = id;
    await this.NotificationTokenRepository.save(NotificationToken);
  }
}
