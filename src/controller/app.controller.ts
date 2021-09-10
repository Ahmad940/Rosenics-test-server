import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/dto/user.dto';
import { updateUserDto } from 'src/dto/user.update.dto';
import { userCategories } from 'src/utils/user.category';
import { userInterests } from 'src/utils/user.interest';
import { AppService } from '../service/app.service';

@ApiTags('/')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // this route fetches all users
  @Get('/all')
  findAll() {
    return this.appService.getUsers();
  }

  // this route add 50 more random users to the user table
  @Get('/addUsers')
  addUsers() {
    return this.appService.addManyUsers();
  }

  // fetches all the interessts available in app
  @Get('/interests')
  getAllInterests() {
    return userInterests;
  }

  // fetches all the work categories available in app
  @Get('/categories')
  getAllCatgegories() {
    return userCategories;
  }

  // add a user
  @Post('')
  addUser(userDto: UserDto) {
    return this.appService.addUser(userDto);
  }

  // editUser()
  @Patch('')
  editUser(id: string, updateUserDto: updateUserDto) {
    return this.appService.editUser(id, updateUserDto);
  }

  @Delete('')
  deleteUser(id: string) {
    return this.appService.deleteUser(id);
  }
}
