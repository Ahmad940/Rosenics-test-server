import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
}
