import { IsBoolean, IsEmail, IsInt, IsString } from "class-validator";

export class SendEmailDTO {
  @IsString()
  fromName: string;

  @IsString()
  fromEmail: string;

  @IsEmail()
  to: string;

  @IsString()
  subject: string;

  @IsString()
  text: string;

  @IsString()
  html: string;

  @IsString()
  smtpHost: string;

  @IsInt()
  smtpPort: number;

  @IsBoolean()
  smtpSecure: boolean;

  @IsString()
  smtpAuthUser: string;

  @IsString()
  smtpAuthPass: string;
}