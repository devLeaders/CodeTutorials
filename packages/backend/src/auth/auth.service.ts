import { UsersRepository } from './user.repository';
import { UserDTO } from './user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {}

  async signUp(userDTO: UserDTO): Promise<void> {
    return this.usersRepository.signUp(userDTO);
  }
}
