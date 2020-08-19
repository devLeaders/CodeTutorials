import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import {UserEntity} from "../auth/users/user.entity"

@Entity('devices')
export class DevicesEntity {
  @PrimaryColumn()
  firebaseToken: string;

  @ManyToOne(type => UserEntity, user => user.firebaseDevices)
  user: UserEntity
}


