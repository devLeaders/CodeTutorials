import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
  Unique,
  OneToMany,
} from 'typeorm';
import { DevicesEntity } from '../../notifications/devices.entity';


@Entity('Users')
@Unique(['email'])
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'LOCALTIMESTAMP' })
  created: string;

  @Column('varchar', { length: 255 }) email: string;

  @Column('varchar', { length: 255 }) name: string;

  @Column('varchar', { length: 255 }) password: string;

  @OneToMany(
    type => DevicesEntity,
    devices => devices.user,
  )
  devices: DevicesEntity[];

  @Column() salt: string;
}
