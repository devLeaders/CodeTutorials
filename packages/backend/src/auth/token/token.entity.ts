import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('tokens')
class TokensEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column('text') token: string;

	@Column("date") dateExpired: Date;

}

export default TokensEntity;