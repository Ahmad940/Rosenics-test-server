import { User } from '.prisma/client';
import { PrismaService } from './prisma.service';
import { UserDto } from 'src/dto/user.dto';
import { updateUserDto } from 'src/dto/user.update.dto';
export declare class AppService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getUsers(): Promise<User[]>;
    addManyUsers(): Promise<any[]>;
    addUser(userDto: UserDto): import(".prisma/client").Prisma.Prisma__UserClient<User>;
    editUser(id: string, updateUserDto: updateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<User>;
    deleteUser(id: string): import(".prisma/client").Prisma.Prisma__UserClient<User>;
}
