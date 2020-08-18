import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {UserEntity} from "../auth/users/user.entity"

@Entity('notificationToken')
export class NotificationTokenEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(type => UserEntity, user => user.notificationTokens)
  user: UserEntity
}


