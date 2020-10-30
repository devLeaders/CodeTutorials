import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { TokenService } from "../token/token.service";
import { verify } from "jsonwebtoken";
import { IJWTToken } from "@project/common/features/auth/models";

@Injectable()
export class ResetPasswordGuard implements CanActivate {
    constructor(protected tokenService: TokenService) { }
    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean | any> {
        try {
            const token = context.switchToHttp().getRequest().headers.token;

            const jwtToken: IJWTToken = verify(token, process.env.SECRET_KEY) as IJWTToken;

            if (await this.tokenService.tokenUsedUp(token)) {
                return false;
            }

            await this.tokenService.addToken(token, jwtToken.exp);
        
            return true;
        } catch (error) {
            return false;
        }
    }
}
