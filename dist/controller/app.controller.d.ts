import { AppService } from '../service/app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    findAll(): Promise<import(".prisma/client").User[]>;
    addUsers(): Promise<any[]>;
    getAllInterests(): string[];
    getAllCatgegories(): ("Employed" | "SelfEmployed" | "Entrepreneur")[];
}
