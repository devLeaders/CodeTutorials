import {Injectable} from "@nestjs/common";
import {Cron, CronExpression} from "@nestjs/schedule";
import {InjectRepository} from "@nestjs/typeorm";
import {MoreThan, Repository} from "typeorm";
import TokensEntity from "./token.entity";

@Injectable()
export class TokenService {
	constructor(@InjectRepository(TokensEntity) private tokensRepository: Repository<TokensEntity>
	) { }

	async addToken(token: string, tokenExpiresEpoch: number) {
		const dateExpired = new Date(0);
		dateExpired.setUTCSeconds(tokenExpiresEpoch);
	
		const tokenEntity = new TokensEntity();
		tokenEntity.token = token;
		tokenEntity.dateExpired = dateExpired;

		await this.tokensRepository.save(tokenEntity);
	}
	async tokenUsedUp(token: string): Promise<Boolean> {
		return !!await this.tokensRepository.findOne({ token });
	}

	@Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
	async clearExpiresTokens(): Promise<void> {
		const tokens = await this.tokensRepository.find({ dateExpired: MoreThan(new Date()) });
		await this.tokensRepository.remove(tokens);
	}

}