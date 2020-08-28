import { user } from './../../../mobile/src/features/common/types/types';
import { UserEntity } from './../auth/users/user.entity';
import { Repository, getRepository, getManager } from 'typeorm';
import { Injectable, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import admin from 'firebase-admin';
import { map } from 'rxjs/operators';

import { ConfigService } from '@nestjs/config';
import { DevicesEntity } from './devices.entity';

export enum MessageTypes {
  NEW_VIDEO = 'newVideo',
  NEW_PLAYLIST = 'newPlaylist',
}

export enum TokenTypes {
  HMS = 'HmsTokens',
  FIREBASE = 'firebaseTokens',
}

type ITokenType = TokenTypes.FIREBASE | TokenTypes.HMS;

type IMessageType = MessageTypes.NEW_VIDEO | MessageTypes.NEW_PLAYLIST;

interface IMessage {
  title: string;
  body: string;
}

interface IMessageData {
  messageType: IMessageType;
  data?: any;
}

interface IHmsMessage {
  titleMessage: string;
  pushMessage: string;
}

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(DevicesEntity)
    private devicesRepository: Repository<DevicesEntity>,
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  async notifyAllFirebase(msg: IMessage, messageData: IMessageData) {
    const tokens = await this.getAllNotificationTokens(TokenTypes.FIREBASE);
    const message = {
      notification: {
        title: msg.title,
        body: msg.body,
      },
      data: {
        ...messageData,
      },
      tokens,
    };
    try {
      const res = await admin.messaging().sendMulticast(message);
      if (res.failureCount > 0) {
        const failedTokens = [];
        res.responses.forEach((res: any, idx: any) => {
          if (!res.success) {
            failedTokens.push(tokens[idx]);
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async hmsNotifyAll(message: IHmsMessage) {
    const token = await this.getHmsAccesToken();
    const id = this.configService.get<string>('HMS_APP_ID');
    const hmsDevicesTokens = await this.getAllNotificationTokens(TokenTypes.HMS);

    const config = {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        host: 'oauth-login.cloud.huawei.com',
        post: '/oauth2/v2/token HTTP/1.1',
        'content-type': 'application/json',
      },
    };

    const body = {
      validate_only: false,
      color: '#8E44AD',
      message: {
        notification: {
          title: message.titleMessage,
          body: message.pushMessage,
        },
        android: {
          notification: {
            title: message.titleMessage,
            body: message.pushMessage,
            click_action: {
              type: 1,
              intent: '#Intent;compo=com.rvr/.Activity;S.W=U;end',
            },
          },
        },
        token: hmsDevicesTokens,
      },
    };

    const res = await this.httpService
      .post(
        `https://push-api.cloud.huawei.com/v1/${id}/messages:send`,
        body,
        config,
      )
      .pipe(map(response => response.data))
      .toPromise();

    console.log(res);
  }

  async getHmsAccesToken() {
    const appSecret = this.configService.get<string>('HMS_APP_SECRET');
    const id = this.configService.get<string>('HMS_APP_ID');

    try {
      const token = await this.httpService
        .post(
          'https://oauth-login.cloud.huawei.com/oauth2/v2/token',
          `grant_type=client_credentials&client_secret=${appSecret}&client_id=${id}`,
        )
        .pipe(map(response => response.data))
        .toPromise();

      return token;
    } catch (err) {
      console.log(err);
    }
  }

  async notifyHms(NotificationDto) {}

  async saveToken(id: string, user: UserEntity, tokenType: ITokenType) {
    const tokens = await this.findUserTokens(user);

    if (tokens) {
      if(tokens[tokenType].includes(id)){
        return
      }else{
        await this.devicesRepository.update({user}, {[tokenType]: [...tokens[tokenType], id]});
      }
    } else {
      const device = new DevicesEntity();
      device.user = user
      device[tokenType] = [id];
      tokenType === TokenTypes.FIREBASE
        ? (device.HmsTokens = [])
        : (device.firebaseTokens = []);
      await this.devicesRepository.save(device);
    }
  }

  async getAllNotificationTokens(tokenType: ITokenType) {
    const entitiesArr = await this.devicesRepository.find({
      select: [tokenType],
    });

    const devices = []
    entitiesArr.forEach((entity: DevicesEntity) => {
      devices.push(...entity[tokenType])
    })

    return devices;
  }

  async findUserTokens(user: UserEntity) {
    try {
      const data = await this.devicesRepository.findOne({ user });
      return data;
    } catch {
      return undefined;
    }
  }
}
