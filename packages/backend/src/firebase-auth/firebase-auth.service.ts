import { UsersService } from './../auth/users/users.service';
import { GoogleUserDto } from './dto/google-user.dto';
import { Exceptions } from './exceptions.enum';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import admin from 'firebase-admin';


@Injectable()
export class FirebaseAuthService {
 
  async verifyUserByToken(idToken: string) {
    const decodedToken =  await admin.auth().verifyIdToken(idToken)
    const payload = { uid: decodedToken.uid };

    const jwtToken = this.createCustomToken(payload)

    return{
      jwtToken
    }
    
  }

  

  async createCustomToken(payload){
    return sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRESIN_JWT,
    });
  }
}

