import { UsersRepository } from './user.repository';
import { UserDTO } from './user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SendEmail } from './SendEmail.service';

@Injectable()
export class AuthService {
  constructor(
    private sendEmail: SendEmail,
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {}

  async signUp(userDTO: UserDTO): Promise<string> {
    if ((await this.usersRepository.signUp(userDTO)) === 'ok') {
      this.sendEmail.send(userDTO);
    }
    return this.usersRepository.signUp(userDTO);
  }
}
