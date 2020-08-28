import { DevicesEntity } from './devices.entity';
import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {NotificationsService} from "./notifications.service"

@Module({
    imports: [TypeOrmModule.forFeature([DevicesEntity]), HttpModule],
    controllers: [],
    providers: [NotificationsService]
})
export class NotificationsModule {}
