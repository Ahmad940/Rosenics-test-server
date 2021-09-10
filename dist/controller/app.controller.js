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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../dto/user.dto");
const user_update_dto_1 = require("../dto/user.update.dto");
const user_category_1 = require("../utils/user.category");
const user_interest_1 = require("../utils/user.interest");
const app_service_1 = require("../service/app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    findAll() {
        return this.appService.getUsers();
    }
    addUsers() {
        return this.appService.addManyUsers();
    }
    getAllInterests() {
        return user_interest_1.userInterests;
    }
    getAllCatgegories() {
        return user_category_1.userCategories;
    }
    addUser(userDto) {
        return this.appService.addUser(userDto);
    }
    editUser(id, updateUserDto) {
        return this.appService.editUser(id, updateUserDto);
    }
    deleteUser(id) {
        return this.appService.deleteUser(id);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/addUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "addUsers", null);
__decorate([
    (0, common_1.Get)('/interests'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAllInterests", null);
__decorate([
    (0, common_1.Get)('/categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAllCatgegories", null);
__decorate([
    (0, common_1.Post)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "addUser", null);
__decorate([
    (0, common_1.Patch)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_update_dto_1.updateUserDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "editUser", null);
__decorate([
    (0, common_1.Delete)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteUser", null);
AppController = __decorate([
    (0, swagger_1.ApiTags)('/'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map