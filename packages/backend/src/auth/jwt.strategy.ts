import { Injectable, HttpException, HttpStatus} from "@nestjs/common";
import {PassportStrategy} from '@nestjs/passport'
import {Strategy,ExtractJwt, VerifiedCallback} from "passport-jwt"
import { AuthService } from "./auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: process.env.SECRET_KEY,
        });
    }

    async validate(payload: any, done:VerifiedCallback) {
        console.log(payload);
        const user = await this.authService.validateUser(payload);
        if (!user) 
            return done(new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED),false,);

        return done(null, user, payload.iat);
    }
}