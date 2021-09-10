"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("./user.dto");
class updateUserDto extends (0, swagger_1.PartialType)(user_dto_1.UserDto) {
}
exports.updateUserDto = updateUserDto;
//# sourceMappingURL=user.update.dto.js.map