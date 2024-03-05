import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/users.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private userService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@Req() req: any) {
    return req.user;
  }
  @Post('signup')
  async signup(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }
}
