import { Controller, Get, Param, Post, Patch } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  getUser(@Param('id') id: string) {
    return `details of ${id}`;
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
