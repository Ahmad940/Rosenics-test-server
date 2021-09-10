import { User } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { internet, name } from 'faker';
import { UserDto } from 'src/dto/user.dto';
import { userCategories } from 'src/utils/user.category';
import { userInterests } from 'src/utils/user.interest';
import { updateUserDto } from 'src/dto/user.update.dto';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  // fetching all users
  getUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  // the below function will populate 50 users in the table
  addManyUsers() {
    // a variable which store a collection of
    // users which will be added to db
    const users = [];

    // According to the specification of the project the
    // table should contain atleast a minimum of 50 users
    // so using a loop and the faker api
    // a list of 50 individual will be populated and added to db
    for (let i = 0; i < 51; i++) {
      // setting the values and binding them to the data transfer
      // objects
      const user: UserDto = new UserDto();
      user.userName = internet.userName();
      user.fullName = name.findName();
      user.email = internet.email();

      // setting the category by a random category
      user.category =
        userCategories[Math.floor(Math.random() * userCategories.length)];

      // setting user age of experience by generating
      //random valeue of 0-5
      user.yearsOfExperience = Math.floor(Math.random() * 5);

      // setting interest by radnomize collection
      user.interest =
        userInterests[Math.floor(Math.random() * userInterests.length)];

      // pushing each user to the user collection
      users.push(this.prismaService.user.create({ data: user }));
    }

    // using prisma transaction and commiting them
    return this.prismaService.$transaction(users);
  }

  //  add user to db
  addUser(userDto: UserDto) {
    return this.prismaService.user.create({
      data: userDto,
    });
  }

  // edit user
  editUser(id: string, updateUserDto: updateUserDto) {
    return this.prismaService.user.update({
      data: updateUserDto,
      where: { id },
    });
  }

  // delete user
  deleteUser(id: string) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
