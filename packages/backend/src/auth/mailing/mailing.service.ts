import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";

@Injectable()
export class MailingService {
    private transporter: any;
    private sender: string;
    constructor(
        private configService: ConfigService,
    ) {
        this.transporter = nodemailer.createTransport({
            host: this.configService.get<string>('MAIL_HOST'),
            port: Number(this.configService.get<number>('MAIL_PORT')),
            secure: (this.configService.get<string>('MAIL_SECURE') === 'true'),
            auth: {
                user: this.configService.get<string>('MAIL_LOGIN'),
                pass: this.configService.get<string>('MAIL_PASSWORD'),
            },
        });

        const options = {
            viewEngine: {
              partialsDir: __dirname + "/views/partials",
              layoutsDir: __dirname + "/views/layouts",
              extname: ".hbs"
            },
            extName: ".hbs",
            viewPath: __dirname + "/views"
          };
    
        this.transporter.use("compile", hbs(options));

        this.sender = this.configService.get<string>('MAIL_SENDER');
    }

    async sendResetPasswordEmail(email: string, jwtToken: string) {
        await this.transporter.sendMail({
            from: this.sender,
            to: email,
            subject: 'Reset Password',
            template: "resetPassword",
            context: { jwtToken: jwtToken }
        });
    }
}