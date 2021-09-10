import { PartialType } from '@nestjs/swagger';
import { UserDto } from './user.dto';

export class updateUserDto extends PartialType(UserDto) {}
