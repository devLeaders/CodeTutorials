import { DevicesEntity } from './devices.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {NotificationsController} from "./notifications.controller"
import {NotificationsService} from "./notifications.service"

@Module({
    imports: [TypeOrmModule.forFeature([DevicesEntity])],
    controllers: [NotificationsController],
    providers: [NotificationsService]
})
export class NotificationsModule {}
