import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendEmailDTO } from './dtos/send-email.dto';
import * as nodemailer from 'nodemailer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async sendEmail(@Body() sendEmailDTO: SendEmailDTO) {
    try {
      const transporter = nodemailer.createTransport({
        host: sendEmailDTO.smtpHost,
        port: sendEmailDTO.smtpPort,
        secure: sendEmailDTO.smtpSecure, // 587 // true for 465, false for other ports
        auth: {
          user: sendEmailDTO.smtpAuthUser, 
          pass: sendEmailDTO.smtpAuthPass, 
        },
      });
  
      return await transporter.sendMail({
        from: `${sendEmailDTO.fromName} <${sendEmailDTO.fromEmail}>`, 
        to: sendEmailDTO.to, 
        subject: sendEmailDTO.subject, 
        text: sendEmailDTO.text, 
        html: sendEmailDTO.html, 
      });
    } catch (err) {
      return err;
    }
  }
}
