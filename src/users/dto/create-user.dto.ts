import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'The username must be a string' })
  @IsNotEmpty({ message: 'The username is required' })
  username!: string;

  @IsEmail({}, { message: 'The email format is invalid' })
  email!: string;

  @IsString({ message: 'The password must be a string' })
  @MinLength(6, { message: 'The password must be at least 6 characters long' })
  password!: string;
}
