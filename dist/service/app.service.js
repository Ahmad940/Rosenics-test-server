"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const faker_1 = require("faker");
const user_dto_1 = require("../dto/user.dto");
const user_category_1 = require("../utils/user.category");
const user_interest_1 = require("../utils/user.interest");
const user_update_dto_1 = require("../dto/user.update.dto");
let AppService = class AppService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getUsers() {
        return this.prismaService.user.findMany();
    }
    addManyUsers() {
        const users = [];
        for (let i = 0; i < 51; i++) {
            const user = new user_dto_1.UserDto();
            user.userName = faker_1.internet.userName();
            user.fullName = faker_1.name.findName();
            user.email = faker_1.internet.email();
            user.category =
                user_category_1.userCategories[Math.floor(Math.random() * user_category_1.userCategories.length)];
            user.yearsOfExperience = Math.floor(Math.random() * 5);
            user.interest =
                user_interest_1.userInterests[Math.floor(Math.random() * user_interest_1.userInterests.length)];
            users.push(this.prismaService.user.create({ data: user }));
        }
        return this.prismaService.$transaction(users);
    }
    addUser(userDto) {
        return this.prismaService.user.create({
            data: userDto,
        });
    }
    editUser(id, updateUserDto) {
        return this.prismaService.user.update({
            data: updateUserDto,
            where: { id },
        });
    }
    deleteUser(id) {
        return this.prismaService.user.delete({
            where: { id },
        });
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map