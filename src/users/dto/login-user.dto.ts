import { IsEmail, IsString } from 'class-validator';

export class LoginUserDto {
  @IsEmail({}, { message: 'The email format is invalid' })
  email!: string;

  @IsString({ message: 'The password must be a string' })
  password!: string;
}
