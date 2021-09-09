import { Category } from '.prisma/client';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  interest: string;

  @IsNotEmpty()
  yearsOfExperience: number;

  @IsNotEmpty()
  category: Category;
}
