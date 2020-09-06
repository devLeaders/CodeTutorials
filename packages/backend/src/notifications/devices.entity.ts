import { Entity, Column, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import {UserEntity} from "../auth/users/user.entity"

@Entity('devices')
export class DevicesEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column("simple-array")
  firebaseTokens: string[];

  @Column("simple-array")
  HmsTokens: string[]

  @ManyToOne(type => UserEntity, user => user.devices)
  user: UserEntity
}


