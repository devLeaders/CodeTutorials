import { UserEntity } from './../auth/users/user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import admin from 'firebase-admin';

import { NotificationDto } from './notification.dto';
import { DevicesEntity } from './devices.entity';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(DevicesEntity)
    private NotificationTokenRepository: Repository<DevicesEntity>,
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

  async saveNotificationToken(id: string, user: UserEntity) {
    const device = new DevicesEntity();
    device.firebaseToken = id;
    await this.NotificationTokenRepository.save(device);

    user.firebaseDevices = [...user.firebaseDevices, device]
  }

  async findNotificationToken(id: string) {
    this.NotificationTokenRepository.findOne({ where: { id } });
  }
}
