import { UserEntity } from './../auth/users/user.entity';
import { Repository, getRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import admin from 'firebase-admin';

import { NotificationDto } from './notification.dto';
import { DevicesEntity } from './devices.entity';

export enum MessageTypes {
  NEW_VIDEO = "newVideo",
  NEW_PLAYLIST = "newPlaylist"
}
type IMessageType = MessageTypes.NEW_VIDEO | MessageTypes.NEW_PLAYLIST;

interface IMessage  {
  title: string,
  body: string
}

interface IMessageData {
  messageType: IMessageType
  data?: any
}

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(DevicesEntity)
    private NotificationTokenRepository: Repository<DevicesEntity>,
  ) {}


  async notifyAllFirebase(msg: IMessage, messageData: IMessageData) {
    const tokens = await this.getAllNotificationTokens();

    const message = {
      notification:{
          title: msg.title,
          body:msg.body,
      },
      data: {
        ...messageData
      },
      tokens
  };


    try{
      const res = await admin.messaging().sendMulticast(message);
      
      if(res.failureCount > 0){
        const failedTokens = [];
        res.responses.forEach((res: any, idx: any) => {
          if(!res.success){
            failedTokens.push(tokens[idx])
          }
        })
      }
    }catch(err){
      console.log(err)
    }
  }


  async notifyHms(NotificationDto) {}

  async saveFirebaseToken(id: string, user: UserEntity) {
    const device = new DevicesEntity();
    device.firebaseToken = id;
    device.user = user;
    await this.NotificationTokenRepository.save(device);
  }

  async getAllNotificationTokens() {
    const devices = await getRepository(DevicesEntity)
      .createQueryBuilder('token')
      .getMany();

    const firebaseTokens = devices.map((device: any) => device.firebaseToken);
    return firebaseTokens;
  }

  async findFirebaseToken(id: string) {
    return await this.NotificationTokenRepository.findOne({ where: { firebaseToken: id } });
  }
}


