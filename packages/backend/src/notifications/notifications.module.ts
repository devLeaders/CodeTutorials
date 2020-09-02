import { DevicesEntity } from './devices.entity';
import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {NotificationsService} from "./notifications.service"
import { ConnectorModule } from 'src/connector/connector.module';

@Module({
    imports: [TypeOrmModule.forFeature([DevicesEntity]), HttpModule, ConnectorModule],
    controllers: [],
    providers: [NotificationsService]
})
export class NotificationsModule {}
