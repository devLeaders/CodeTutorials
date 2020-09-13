import { UsersRepository } from './../auth/users/user.repository';
import { UsersService } from './../auth/users/users.service';
import { Exceptions } from './exceptions.enum';
import { v4 as uuidv4 } from 'uuid';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import admin from 'firebase-admin';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FirebaseAuthService {
  constructor(
    private UsersService: UsersService,
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {}

  async login(idToken: string) {
    const {email} = await this.verifyGoogleAcc(idToken)

    if (email) {
      const user = await this.UsersService.findByEmail(email);
      let payload = {}

      if (!user) {
        const password = uuidv4()
        await this.usersRepository.signUp({ email, password });
        const newUser = await this.UsersService.findByEmail(email);
        payload = {email, id: newUser.id}
      }else{
        payload = {email, id: user.id}
      }


      let token = await this.createCustomToken(payload);

      return {
        token
      };
    } else {
      throw new UnauthorizedException(Exceptions.GOOGLE_ACC_DOSENT_EXISTS);
    }
  }

  async verifyGoogleAcc(idToken: string){
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    return await admin.auth().getUser(decodedToken.uid);
  }
  
  async createCustomToken(payload) {
    return sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRESIN_JWT,
    });
  }
}
