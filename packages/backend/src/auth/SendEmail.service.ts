import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { nodemailer, createTransport } from 'nodemailer';

@Injectable()
export class SendEmail {
  send(userDTO: UserDTO) {
    console.log(userDTO);
    let transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'codetutorialsteam@gmail.com',
        pass: 'DevLeaders',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    let info = transporter.sendMail({
      from: '"Code Tutorials" <codetutorialteam@gmail.com>',
      to: `${userDTO.email}`,
      subject: 'Rejestracja',
      text: 'Dziękujemy za zarejestrowanie się na naszej stronie',
    });
  }
}
