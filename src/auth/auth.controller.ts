import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async signin(@Body() data: SignInDto, @Res({ passthrough: true }) res: any) {
    const { user, token } = await this.authService.signinUser(
      data.username,
      data.password,
    );
    res.cookie('access_token', token, { httpOnly: true });
    return user;
  }
  @Post('signup')
  async signup(@Body() data: CreateUserDto) {
    return this.authService.signupUser(data);
  }

  @Get('signout')
  async signout(@Res({ passthrough: true }) res: any) {
    res.clearCookie('access_token');
    return 'signed out successfully';
  }
}
