import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@Req() req: any) {
    return this.authService.signinUser(req.user);
  }
  @Post('signup')
  async signup(@Body() data: CreateUserDto) {
    return this.authService.signupUser(data);
  }
}
