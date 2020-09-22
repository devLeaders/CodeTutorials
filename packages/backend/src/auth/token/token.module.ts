import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import TokensEntity from "./token.entity";
import {TokenService} from "./token.service";

@Module({
	imports: [TypeOrmModule.forFeature([TokensEntity])],
	controllers: [],
	providers: [TokenService],
	exports: [TokenService],
})
export class TokensModule {}