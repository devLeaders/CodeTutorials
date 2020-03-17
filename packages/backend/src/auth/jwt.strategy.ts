import { Injectable, HttpException, HttpStatus} from "@nestjs/common";
import {PassportStrategy} from '@nestjs/passport'
import {Strategy,ExtractJwt, VerifiedCallback} from "passport-jwt"
import { AuthService } from "./auth.service";
import { ErrorMessage } from "./users/enums/ErrorMessage";
import { SignInPayload } from "./users/models/SignInPayload";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: process.env.SECRET_KEY,
        });
    }

    async validate(payload: SignInPayload, done:VerifiedCallback) {
        const user = await this.authService.validateUser(payload);
        if (!user){
            return done(new HttpException(ErrorMessage.UNAUTHORIZED, HttpStatus.UNAUTHORIZED),false);
        }
            
        return done(null, user, payload.iat);
    }
}