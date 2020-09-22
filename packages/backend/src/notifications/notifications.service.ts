import { ConnectorService } from './../connector/connector.service';
import { UserEntity } from './../auth/users/user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import admin from 'firebase-admin';

import { ConfigService } from '@nestjs/config';
import { DevicesEntity } from './devices.entity';
import {
  IMessageData,
  IMessage,
  IHmsMessage,
  TokenTypes,
  ITokenType,
  MessageTypes,
} from './message.model';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(DevicesEntity)
    private devicesRepository: Repository<DevicesEntity>,
    private configService: ConfigService,
    private connectorService: ConnectorService,
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
    const token = await this.connectorService.getHmsAccesToken();
    const host = this.configService.get<string>('HMS_HOST');
    const post = this.configService.get<string>('HMS_POST');
    const hmsDevicesTokens = await this.getAllNotificationTokens(
      TokenTypes.HMS,
    );

    const config = {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        host: host,
        post: post,
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

    try {
      const res = await this.connectorService.sendToAllHms(body, config);
    } catch (err) {
      console.log(err);
    }
  }

  async saveToken(user: UserEntity, firebaseToken?: string, hmsToken?: string) {
    const tokens = await this.findUserTokens(user);

    if (tokens) {
      if (
        !tokens.firebaseTokens.includes(firebaseToken) ||
        !tokens.HmsTokens.includes(hmsToken)
      ) {
        await this.devicesRepository.update(
          { user },
          {
            firebaseTokens:
              !tokens.firebaseTokens.includes(firebaseToken) && firebaseToken
                ? [...tokens.firebaseTokens, firebaseToken]
                : [...tokens.firebaseTokens],
            HmsTokens:
              !tokens.HmsTokens.includes(hmsToken) && hmsToken
                ? [...tokens.HmsTokens, hmsToken]
                : [...tokens.HmsTokens],
          },
        );
      } else {
        return;
      }
    } else {
      const device = new DevicesEntity();
      device.user = user;
      device.firebaseTokens = firebaseToken ? [firebaseToken] : [];
      device.HmsTokens = hmsToken ? [hmsToken] : [];
      await this.devicesRepository.save(device);
    }
  }

  async createFirebaseMessage(
    title: string,
    description: string,
    id: number,
  ) {
    const firebaseMessage = {
      title,
      body: description,
    };

    const firebaseMessageData = {
      messageType: MessageTypes.NEW_VIDEO,
      id,
    };

    return{firebaseMessage, firebaseMessageData}
  }

  async createHmsMessage(title: string, description: string) {
   const hmsMessage = {
    titleMessage: title,
    pushMessage: description
   }

   return hmsMessage
  }

  async getAllNotificationTokens(tokenType: ITokenType) {
    const entitiesArr = await this.devicesRepository.find({
      select: [tokenType],
    });

    const devices = [];
    entitiesArr.forEach((entity: DevicesEntity) => {
      devices.push(...entity[tokenType]);
    });

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
