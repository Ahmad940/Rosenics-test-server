import { User } from '.prisma/client';
import { PrismaService } from './prisma.service';
export declare class AppService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getUsers(): Promise<User[]>;
    addManyUsers(): Promise<any[]>;
}
