import { FirebaseAuthService } from './firebase-auth.service';
import { GoogleUserDto } from './dto/google-user.dto';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('firebase-auth')
export class FirebaseAuthController {
    constructor(private firebaseAuthService: FirebaseAuthService){}
    @Post('/google')
    async verifyUserId(@Body('idToken') idToken: string): Promise<any>{
        return await this.firebaseAuthService.verifyUserByToken(idToken)
    }

}
