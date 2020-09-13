import { FirebaseAuthService } from './firebase-auth.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('firebase-auth')
export class FirebaseAuthController {
    constructor(private firebaseAuthService: FirebaseAuthService){}
    @Post('/google')
    async verifyUserId(@Body('idToken') idToken: string): Promise<{token: string}>{
        return await this.firebaseAuthService.login(idToken)
    }

}
