import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
  Unique,
  OneToMany,
} from 'typeorm';
import { NotificationTokenEntity } from '../../notifications/notificationToken.entity';

@Entity('Users')
@Unique(['email'])
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'LOCALTIMESTAMP' })
  created: string;

  @Column('varchar', { length: 255 }) email: string;

  @Column('varchar', { length: 255 }) password: string;

  @Column() salt: string;

  @OneToMany(
    type => NotificationTokenEntity,
    notificationTokens => notificationTokens.user,
  )
  notificationTokens: NotificationTokenEntity[];
}
