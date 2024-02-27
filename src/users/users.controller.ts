import { Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get(':id')
  getUser() {
    return this.usersService.findUser();
  }

  @Post()
  createUser() {
    return 'new user created';
  }

  @Patch(':id')
  updateUser(@Param('id') id: string) {
    return `${id} user is updated`;
  }
}
