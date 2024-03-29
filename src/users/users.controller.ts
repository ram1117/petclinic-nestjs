import { Controller, Get, Param, Post, Patch, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { CurrentUser } from './decorators/current-user.decorator';
import { ApiExcludeController } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiExcludeController()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('user')
  getUser(@CurrentUser() user: any) {
    return this.usersService.findbyId(user.id);
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }

  @Patch()
  updateUser(@CurrentUser() user: any, @Body() body: UpdateUserDto) {
    return this.usersService.updateUser(user.id, body);
  }
}
