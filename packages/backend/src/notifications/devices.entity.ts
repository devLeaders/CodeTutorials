import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import {UserEntity} from "../auth/users/user.entity"

@Entity('devices')
export class DevicesEntity {
  @PrimaryColumn("simple-array")
  firebaseTokens: string[];

  @Column("simple-array")
  HmsTokens: string[]

  @ManyToOne(type => UserEntity, user => user.devices)
  user: UserEntity
}


