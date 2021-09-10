import { UserDto } from 'src/dto/user.dto';
import { updateUserDto } from 'src/dto/user.update.dto';
import { AppService } from '../service/app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    findAll(): Promise<import(".prisma/client").User[]>;
    addUsers(): Promise<any[]>;
    getAllInterests(): string[];
    getAllCatgegories(): ("Employed" | "SelfEmployed" | "Entrepreneur")[];
    addUser(userDto: UserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    editUser(id: string, updateUserDto: updateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
    deleteUser(id: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
