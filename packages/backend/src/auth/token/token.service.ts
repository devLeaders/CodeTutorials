import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { InjectRepository } from "@nestjs/typeorm";
import { TokenDTO } from "../token.dto";
import TokensEntity from "./token.entity";
import { MoreThan, Repository } from "typeorm";


@Injectable()
export class TokenService {
    constructor(@InjectRepository(TokensEntity) private tokensRepository: Repository<TokensEntity>
    ) { }

    async addToken(tokenRequest: TokenDTO) {
        const token = new TokensEntity();
        token.token = tokenRequest.token;
        token.dateExpired = tokenRequest.dateExpired;
        await this.tokensRepository.save(token);
    }
    async tokenUsedUp(token: string):Promise<Boolean> {
        return !!await this.tokensRepository.findOne({token});
    }

    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
	async clearExpiresTokens(): Promise<void> {
        const tokens = await this.tokensRepository.find({dateExpired : MoreThan(new Date())});
        await this.tokensRepository.remove(tokens);
    }

}
