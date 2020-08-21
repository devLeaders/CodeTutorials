import { DevicesEntity } from './devices.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {NotificationsService} from "./notifications.service"

@Module({
    imports: [TypeOrmModule.forFeature([DevicesEntity])],
    controllers: [],
    providers: [NotificationsService]
})
export class NotificationsModule {}
