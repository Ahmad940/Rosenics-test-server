import { Category } from '.prisma/client';
export declare class UserDto {
    userName: string;
    fullName: string;
    email: string;
    interest: string;
    yearsOfExperience: number;
    category: Category;
}
